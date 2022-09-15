<?php

namespace App\Controller;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\User;
use App\Form\FranchiseType;
use App\Repository\FeatureRepository;
use App\Repository\FranchiseRepository;
use App\Repository\PermissionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class FranchiseController extends AbstractController
{
    #[Route('/franchise', name: 'app_franchise', methods: ['GET', 'POST'])]
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


    #[Route('/franchise/new', name: 'app_franchise_new')]
    public function new(
        Request $request, 
        FeatureRepository $featureRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        ): Response
        {
            $franchise = new Franchise();
            $user = new User(); 
            
            // $formManager = $form->get('manager');
            $form = $this->createForm(FranchiseType::class, $franchise);
            $form->remove('isActive');
            $form->get('manager')->remove('password');
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
                $user->setPassword('temp');
                $user->setIsActive(false); // until validation per mail

                $franchise->setSlug($sluggerInterface->slug($franchise->getName())->lower());
                $franchise->setManager($user);
                $franchise->setisActive(true);

                // Récuperer toute le nbre max permissions existantes
                $nbMaxFeature = count($featureRepository->findAll());
                $allFeatures = $featureRepository->findAll();

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
            return $this->redirectToRoute('app_franchise');            
            }
        return $this->renderForm('pages/franchise/new.html.twig', [
            'form' => $form,
            'franchise' => $franchise,
        ]);;
    }


    #[Route('/franchise/edit/{slug}', name: 'app_franchise_edit', methods: ['GET', 'POST'])]
    public function edit(Franchise $franchise,
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
        return $this->redirectToRoute('app_franchise');
    }
    return $this->renderForm('pages/franchise/edit.html.twig', [
        'form' => $form,
        'editMode' => true,
        'franchise' => $franchise,
        'allFeatures' => $allFeatures,
        'franchisePermissions' => $franchisePermissions,
        'ActivePermissionFranchise' => $ActivePermissionFranchise
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


    #[Route('/franchise/{slug}', name: 'app_franchise_delete', methods: ['POST'])]
    public function delete(Request $request, Franchise $franchise, FranchiseRepository $franchiseRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$franchise->getId(), $request->request->get('_token'))) {
            $franchiseRepository->remove($franchise, true);
        }
        return $this->redirectToRoute('app_structure', [], Response::HTTP_SEE_OTHER);
    }   
}
