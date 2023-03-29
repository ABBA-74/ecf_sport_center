<?php

namespace App\Controller\Admin;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use App\Form\StructureType;
use App\Repository\FeatureRepository;
use App\Repository\PermissionRepository;
use App\Repository\StructureRepository;
use App\Service\GeneratePwdService;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


#[Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_COMMERCIAL')")]
class StructureController extends AbstractController
{
    #[Route('/admin/structures', name: 'app_structure', methods: ['GET', 'POST'])]
    public function index(
        StructureRepository $structureRepository,
        Request $request
        ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveStructure = $request->get('opt') == 'true' ?? null;
        $searchStructure = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get structures according to the current page
        $structures = $structureRepository->getPaginatedStructures($currentPage, $limit, $isActiveStructure, $searchStructure);

        // Get total nbre of structures
        $totalStructures = $structureRepository->getTotalStructures($isActiveStructure, $searchStructure);

        // Check if ajax request
        if($request->get('ajax')){
            return new JsonResponse([
                "content" => $this->renderView('pages/structure/_structure-list.html.twig', [
                    'structures' => $structures,
                    'total' => $totalStructures,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay
                ])
            ]);
        }
        return $this->render('pages/structure/index.html.twig', [
            'structures' => $structures,
            'total' => $totalStructures,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay
        ]);
    }
    
    
    #[Route('/admin/structure/new', name: 'app_structure_new', methods: ['GET', 'POST'])]
    public function new(
        Request $request, 
        FeatureRepository $featureRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        JWTService $jWTService,
        SendMailService $sendMailService,
        GeneratePwdService $generatePwdService,
        UserPasswordHasherInterface $userPasswordHasherInterface
        ): Response
        {
            $structure = new Structure();
            $user = new User(); 
            
            $form = $this->createForm(StructureType::class, $structure);
            $form->remove('isActive');
            $form->get('manager')->remove('password');
            $form->handleRequest($request);
            $allInactiveFeatures = $featureRepository->getInactiveFeatures();
            
            if ($form->isSubmitted() && $form->isValid()) {
                $structure = $form->getData();
                // Récupérer le commercial qui a effectuer l'ajout / modfication
                $structure->setCommercial($this->getUser());
                // Récupérer le manager et l'affecté dans user
                $user =  $form->get('manager')->getData();
                // Création du slug User (manager) + add role
                $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
                '-' . $sluggerInterface->slug($user->getLastname())->lower());
                $user->setRoles(['ROLE_MANAGER_STRUCTURE', 'ROLE_NOT_ACTIVE']);

                // Get random password 10 char + hashPassword
                $tmpPwd = $generatePwdService->random_str();
                $user->setPassword($userPasswordHasherInterface
                ->hashPassword($user, $tmpPwd));

                $user->setIsActive(false); // Until validation per mail

                $franchise = $form->get('franchise')->getData();
                
                $structure->setFranchise($franchise);
                $structure->setSlug($sluggerInterface->slug($structure->getName())->lower());
                $structure->setManager($user);
                $structure->setisActive(true);

                // Récuperer toute le nbre max permissions existantes
                $nbMaxFeature = count($featureRepository->findAll());
                $allFeatures = $featureRepository->findAll();
                
                for ($i=0; $i < $nbMaxFeature; $i++) { 
                    $permission = new Permission();
                    $permission->addCommercial($this->getUser());
                    $permission->setStructure($structure);
                    $permission->setFranchise($franchise);
                    $permission->setFeature($allFeatures[$i]);
                    $permission->setisGlobal(false);

                    $features = $form->get('feature')->getData();
                    foreach ($features as $feature) {
                        if ($allFeatures[$i]->getId() === $feature->getId()) {
                            $permission->setisActive(true);
                            break;
                        }
                        $permission->setisActive(false);
                    }
                    // Rajouter la permission dans la collection Permissions de Structure
                    $structure->addPermission($permission);

                    $em->persist($permission);                
                }
                $em->persist($user);
                $em->persist($structure);
                $em->flush();

                // Get JWT token
                $header =  [ 'alg' => 'HS256', 'typ' => 'JWT' ];
                $payload = [ 'user_id' => $user->getId() ];
                $tokenJwt = $jWTService->generate($header, $payload, $this->getParameter('app.jwtsecret'));

                // Envoie mail au manager de la structure - demande activation compte
                $sendMailService->send(
                'service-client@sport-center.abb-dev.fr',
                $user->getEmail(), '',
                'Demande d\'activation de votre compte Sport Center',
                'register-mail',
                [
                    'user' => $user,
                    'token' => $tokenJwt,
                    'tmpPwd' => $tmpPwd
                ]
                );
                // Message flash confirmation nouvelle structure
                $this->addFlash('success', 'La structure a été ajoutée avec succès !');

                return $this->redirectToRoute('app_structure');            
            }
        return $this->renderForm('pages/structure/new.html.twig', [
            'form' => $form,
            'structure' => $structure,
            'allInactiveFeatures' => $allInactiveFeatures,
        ]);
    }


    #[Route('/admin/structure/new/getpermissions/{id}', name: 'app_structure_getpermission', methods: ['GET'])]
    public function getpermisssion(
        Request $request, 
        PermissionRepository $permissionRepository,
        Franchise $franchise) {

        // Only include it if the function is reserved for ajax calls only.
        if (!$request->isXmlHttpRequest()) {
            return new JsonResponse(array(
                'status' => 'Error',
                'message' => 'Error'),
            400);
        }
        $globalesPermissions = $permissionRepository->findGlobalesPermissions($franchise);
        return $this->json($globalesPermissions, Response::HTTP_OK, [], ['groups' => ['read_global_permission']]);
    }


    #[Route('/admin/structure/edit/{slug}', name: 'app_structure_edit', methods: ['GET', 'POST'])]
    public function edit(
        Structure $structure,
        Request $request, 
        FeatureRepository $featureRepository,
        PermissionRepository $permissionRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        SendMailService $sendMailService
        ): Response
        {
            $form = $this->createForm(StructureType::class, $structure);
            $form->get('manager')->remove('password');
            $form->remove('franchise');
            $franchise = $structure->getFranchise();

            $form->handleRequest($request);

            // Récuperer toute le nbre max permissions existantes
            $nbMaxFeature = count($featureRepository->findAll());
            $allFeatures = $featureRepository->findAll();
            $structurePermissions = $permissionRepository->findBy(['structure' => $structure]);
            $ActivePermissionStructure = $permissionRepository->findByActivePermissionsStructure(['structure' => $structure]);
            $allInactiveFeatures = $featureRepository->getInactiveFeatures();
            
            if ($form->isSubmitted() && $form->isValid()) {
                $structure = $form->getData();
                $allFeatures = $form->get('feature')->getData();

                // Récupérer le commercial qui a effectuer l'ajout / modfication
                $structure->setCommercial($this->getUser());
                // Récupérer le manager et l'affecté dans user
                $user =  $form->get('manager')->getData();
                // Création du slug User (manager)
                $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
                '-' . $sluggerInterface->slug($user->getLastname())->lower());

                $structure->setFranchise($franchise);
                $structure->setSlug($sluggerInterface->slug($structure->getName())->lower());
                $structure->setManager($user);
                $structure->setisActive($form->get('isActive')->getData());

                // Remove all previous permissions record for this structure
                $structure->removeAllPermissions($structure->getPermissions());
                // Récuperer toute le nbre max permissions existantes
                $nbMaxFeature = count($featureRepository->findAll());
                $allFeatures = $featureRepository->findAll();
                
                for ($i=0; $i < $nbMaxFeature; $i++) { 
                    $permission = new Permission();
                    $permission->addCommercial($this->getUser());
                    $permission->setStructure($structure);
                    $permission->setFranchise($franchise);
                    $permission->setFeature($allFeatures[$i]);
                    $permission->setisGlobal(false);

                    $features = $form->get('feature')->getData();
                    foreach ($features as $feature) {
                        if ($allFeatures[$i]->getId() === $feature->getId()) {
                            $permission->setisActive(true);
                            break;
                        }
                        $permission->setisActive(false);
                    }
                    // Rajouter des permissions dans la collection Permissions de Structure
                    $structure->addPermission($permission);
                    $em->persist($permission);                
                }
            $em->persist($user);
            $em->persist($structure);
            $em->flush();


            // Envoie mail au manager de la structure + responsable franchise - modification du compte structure
            $sendMailService->send(
            'no-reply@sport-center.abb-dev.fr',
            $user->getEmail(), $structure->getFranchise()->getManager()->getEmail(),
            'Mise à jour de vote compte Sport Center',
            'notif-modifications-mail',
            [
                'isFranchise' => false,
                'customer' => $structure,
                'user' => $user,
                'commercial' => $structure->getCommercial()
            ]
            );
            // Message flash confirmation modification structure
            $this->addFlash('info', 'La structure a été modifiée avec succès !');

            return $this->redirectToRoute('app_structure');
        }
        return $this->renderForm('pages/structure/edit.html.twig', [
            'form' => $form,
            'editMode' => true,
            'structure' => $structure,
            'allFeatures' => $allFeatures,
            'structurePermissions' => $structurePermissions,
            'ActivePermissionStructure' => $ActivePermissionStructure,
            'allInactiveFeatures' => $allInactiveFeatures,
        ]);
    }

    #[Route('/admin/structure/{slug}', name: 'app_structure_delete', methods: ['POST'])]
    public function delete(Request $request, Structure $structure, StructureRepository $structureRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$structure->getId(), $request->request->get('_token'))) {            
            $structureRepository->remove($structure, true);

            // Message flash confirmation structure supprimée
            $this->addFlash('danger', 'La structure a été supprimée avec succès !');
        }
        return $this->redirectToRoute('app_structure', [], Response::HTTP_SEE_OTHER);
    }
}
