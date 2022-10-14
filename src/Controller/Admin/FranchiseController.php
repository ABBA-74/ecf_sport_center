<?php

namespace App\Controller\Admin;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\User;
use App\Form\FranchiseType;
use App\Repository\FeatureRepository;
use App\Repository\FranchiseRepository;
use App\Repository\PermissionRepository;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class FranchiseController extends AbstractController
{
    #[Route('/admin/franchises', name: 'app_franchise', methods: ['GET', 'POST'])]
    public function index(
        FranchiseRepository $franchiseRepository,
        Request $request
    ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveFranchise = $request->get('opt') == 'true' ?? null;
        $searchFranchise = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get franchise according to the current page
        $franchises = $franchiseRepository->getPaginatedFranchises($currentPage, $limit, $isActiveFranchise, $searchFranchise);

        // Get total nbre of franchise
        $totalFranchises = $franchiseRepository->getTotalFranchises($isActiveFranchise, $searchFranchise);
        
        // Check if ajax request
        if($request->get('ajax')){
            return new JsonResponse([
                "content" => $this->renderView('pages/franchise/_franchise-list.html.twig', [
                    'franchises' => $franchises,
                    'total' => $totalFranchises,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay
                ])
            ]);
        }
        return $this->render('pages/franchise/index.html.twig', [
            'franchises' => $franchises,
            'total' => $totalFranchises,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay
        ]);
    }


    #[Route('/admin/franchise/new', name: 'app_franchise_new')]
    public function new(
        Request $request, 
        FeatureRepository $featureRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        JWTService $jWTService,
        SendMailService $sendMailService,
        UserPasswordHasherInterface $userPasswordHasherInterface
    ): Response
    {
        $franchise = new Franchise();
        $user = new User(); 
        
        // $formManager = $form->get('manager');
        $form = $this->createForm(FranchiseType::class, $franchise);
        $form->remove('isActive');
        $form->get('manager')->remove('password');
        $allInactiveFeatures = $featureRepository->getInactiveFeatures();
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            // Récupérer le commercial qui a effectuer l'ajout / modfication
            $franchise->setCommercial($this->getUser());
            // Récupérer le manager et l'affecté dans user
            $user =  $form->get('manager')->getData();
            // Création du slug User (manager) + add Role
            $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
            '-' . $sluggerInterface->slug($user->getLastname())->lower());
            $user->setRoles(['ROLE_MANAGER_FRANCHISE']);
            // TODO SEND MAIL + TEMPORARY PASSWORD + ENCODE PASSWORD
            // $user->setPassword('temp');


            $user->setPassword($userPasswordHasherInterface
            ->hashPassword($user, 'temp'));


            $user->setIsActive(false); // until validation per mail
            $franchise->setSlug($sluggerInterface->slug($franchise->getName())->lower());
            $franchise->setManager($user);
            $franchise->setisActive(true);
            // Récuperer toute le nbre max permissions existantes
            $nbMaxFeature = count($featureRepository->findAll());
            $allFeatures = $featureRepository->findAll();
            // dump($allFeatures);
            for ($i=0; $i < $nbMaxFeature; $i++) { 
                $permission = new Permission();
                $permission->addCommercial($this->getUser());
                    // $permission->setStructure($franchise);
                $permission->setFranchise($franchise);
                $permission->setFeature($allFeatures[$i]);
                $permission->setisGlobal(true);
                $features = $form->get('feature')->getData();
                foreach ($features as $feature) {
                    if ($allFeatures[$i]->getId() === $feature->getId()) {
                        $permission->setisActive(true);
                        break;
                    }
                    $permission->setisActive(false);
                }
                // Rajouter la permission dans la collection Permissions de Structure
                $franchise->addPermission($permission);
                $em->persist($permission);
                
                
            }
        $em->persist($user);
        $em->persist($franchise);
        $em->flush();

        // Génération du token
        $header =  [
            'alg' => 'HS256',
            'typ' => 'JWT'
        ];
        $payload = [
            'user_id' => $user->getId()
        ];
        $tokenJwt = $jWTService->generate($header, $payload, $this->getParameter('app.jwtsecret'));

        // dd($token);


        // Envoie mail au responsable de la franchise
        $sendMailService->send(
            'no-reply@monsite.fr',
            $user->getEmail(),
            'Activation de votre compte sur le site SPORT CENTER',
            'register',
            [
                'user' => $user,
                'token' => $tokenJwt
            ]
        );

        // Message flash confirmation nouvelle franchise
        $this->addFlash('success', 'La franchise a été ajoutée avec succès !');

        return $this->redirectToRoute('app_franchise');            
        }
    return $this->renderForm('pages/franchise/new.html.twig', [
        'form' => $form,
        'franchise' => $franchise,
        'allInactiveFeatures' => $allInactiveFeatures,
    ]);
    }


    #[Route('/admin/franchise/edit/{slug}', name: 'app_franchise_edit', methods: ['GET', 'POST'])]
    public function edit(
        Franchise $franchise,
        Request $request,
        FeatureRepository $featureRepository,
        PermissionRepository $permissionRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
    ): Response
    {
        $form = $this->createForm(FranchiseType::class, $franchise);
        // Remove field password
        $formManager = $form->get('manager');
        $formManager->remove('password');
        // $franchise = $structure->getFranchise();

        $form->handleRequest($request);

        // Récuperer toute le nbre max permissions existantes
        $nbMaxFeature = count($featureRepository->findAll());
        $allFeatures = $featureRepository->findAll();
        $franchisePermissions = $permissionRepository->findBy(['franchise' => $franchise]);
        $ActivePermissionFranchise = $permissionRepository->findByActivePermissionsFranchise(['franchise' => $franchise]);
        $allInactiveFeatures = $featureRepository->getInactiveFeatures();

        // $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $franchise = $form->getData();
            $allFeatures = $form->get('feature')->getData();

            // Récupérer le commercial qui a effectuer l'ajout / modfication
            $franchise->setCommercial($this->getUser());
            // Récupérer le manager et l'affecté dans user
            $user =  $form->get('manager')->getData();
            // Création du slug User (manager)
            $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
            '-' . $sluggerInterface->slug($user->getLastname())->lower());

            // $structure->setFranchise($franchise);
            $franchise->setSlug($sluggerInterface->slug($franchise->getName())->lower());
            $franchise->setManager($user);
            $franchise->setisActive($form->get('isActive')->getData());

            // Set inactives all structures of franchise if the franchise is set inactive // TODO
            

            // Remove all previous permissions record for this franchise
            $franchise->removeAllPermissions($franchise->getPermissions());
            // Récuperer toute le nbre max permissions existantes
            $nbMaxFeature = count($featureRepository->findAll());
            $allFeatures = $featureRepository->findAll();
            
            for ($i=0; $i < $nbMaxFeature; $i++) { 
                $permission = new Permission();
                $permission->addCommercial($this->getUser());
                // $permission->setStructure($structure);
                $permission->setFranchise($franchise);
                $permission->setFeature($allFeatures[$i]);
                $permission->setisGlobal(true);

                $features = $form->get('feature')->getData();
                foreach ($features as $feature) {
                    if ($allFeatures[$i]->getId() === $feature->getId()) {
                        $permission->setisActive(true);
                        break;
                    }
                    $permission->setisActive(false);
                }
                // Rajouter la permission dans la collection Permissions de Structure
                $franchise->addPermission($permission);

                $em->persist($permission);                
            }
        $em->persist($user);
        $em->persist($franchise);
        $em->flush();

        // Message flash confirmation modification franchise
        $this->addFlash('info', 'La franchise a été modifiée avec succès !');

        return $this->redirectToRoute('app_franchise');
    }
    return $this->renderForm('pages/franchise/edit.html.twig', [
        'form' => $form,
        'editMode' => true,
        'franchise' => $franchise,
        'allFeatures' => $allFeatures,
        'franchisePermissions' => $franchisePermissions,
        'ActivePermissionFranchise' => $ActivePermissionFranchise,
        'allInactiveFeatures' => $allInactiveFeatures,
    ]);
    }


    #[Route('/franchise/{slug}', name: 'app_franchise_show', methods: ['GET'])]
    public function show(FranchiseRepository $franchiseRepository, Franchise $franchise): Response
    {
        $structures = $franchise->getStructure();

        return $this->render('pages/franchise/show.html.twig', [
            'franchise' => $franchise,
            'structures' => $structures,
        ]);
    }


    #[Route('/admin/franchise/{slug}', name: 'app_franchise_delete', methods: ['POST'])]
    public function delete(Request $request, Franchise $franchise, FranchiseRepository $franchiseRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchise->getId(), $request->request->get('_token'))) {
            // Message flash confirmation suppresion franchise
            $this->addFlash('danger', 'La franchise a été supprimée avec succès !');

            $franchiseRepository->remove($franchise, true);
        } else {
            dd($request->request->get('_token'));
        }
        return $this->redirectToRoute('app_franchise', [], Response::HTTP_SEE_OTHER);
    }   
}