<?php

namespace App\Controller;

use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use App\Form\StructureType;
use App\Repository\FeatureRepository;
use App\Repository\PermissionRepository;
use App\Repository\StructureRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class StructureController extends AbstractController
{
    // #[Route('/structure', name: 'app_structure', methods: ['GET', 'POST'])]
    #[Route('/structure', name: 'app_structure', methods: ['GET'])]
    public function index(StructureRepository $structureRepository): Response
    {
        $structures = $structureRepository->findAll();

        return $this->render('pages/structure/index.html.twig', [
            'structures' => $structures,
        ]);
    }

    #[Route('/structure/new', name: 'app_structure_new', methods: ['GET', 'POST'])]
    public function new(
        Request $request, 
        FeatureRepository $featureRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        ): Response
    {
        $structure = new Structure();
        $user = new User(); 
        
        $form = $this->createForm(StructureType::class, $structure);
        
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $structure = $form->getData();
            // Récupérer le commercial qui a effectuer l'ajout / modfication
            $structure->setCommercial($this->getUser());
            // Récupérer le manager et l'affecté dans user
            $user =  $form->get('manager')->getData();
            // Création du slug User (manager)
            // $user->setSlug($user->getFirstname());
            $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
            '-' . $sluggerInterface->slug($user->getLastname())->lower());
            // dump($form->get('feature'));
            
            $franchise = $form->get('franchise')->getData();
            
            // dd($i);
            // dd($permission);
            // dump($franchise->getData());
            
            $structure->setFranchise($franchise);
            $structure->setSlug($structure->getName());
            // $structure->setCreatedAt(new \DateTimeImmutable());
            $structure->setManager($user);
            $structure->setisActive(true);
            

            
            // dd($features->getData()[0]);
            // // TODO A MODIFIER ENTITY + MIGRATION 
            
            // Récuperer toute le nbre max permissions existantes
            $nbMaxFeature = count($featureRepository->findAll());
            $allFeatures = $featureRepository->findAll();
            // $j=0;
            for ($i=0; $i < $nbMaxFeature; $i++) { 
                $features = $form->get('feature')->getData();
                $permission = new Permission();
                
                $permission->addCommercial($this->getUser());
                $permission->setStructure($structure);
                $permission->setFranchise($franchise);
                $permission->setFeature($allFeatures[$i]);
                // $permission->setFeature($feature);
                // dd($allFeatures[$i]);
                // dd($features[$i]);
                foreach ($features as $feature) {
                    // dump($feature);
                    if ($allFeatures[$i]->getId() === $feature->getId()) {
                        $permission->setisActive(true);
                        break;
                    }
                    $permission->setisActive(false);
                }
                $permission->setisGlobal(false);
                // Rajouter la permission dans la collection Permissions de Structure
                $structure->addPermission($permission);

                // $permission->setCreatedAt(new \DateTimeImmutable());
                $em->persist($permission);
                // dump($permission);
                // dump($allFeatures[$i]);
                // $em->flush();
                // $j++;
                
            }
            $em->persist($user);
            $em->persist($structure);
            //            Récupérer toutes les permissions de la structure + les rajouter
            // $allPermissions = $permissionRepository->findBy(['structure' => $structure]);
            // foreach ($allPermissions as $permission) {
                // }
            // dump($j); 
            // dd($j); 
            
            // dd($form->getData());
            // dd($structure);
            $em->flush();
            // dd($structure->getPermissions());
            return $this->redirectToRoute('app_structure');
            
        }
        
        return $this->renderForm('pages/structure/new.html.twig', [
            'structure' => $structure,
            'form' => $form,
        ]);
    }
    
    
    #[Route('/structure/edit/{id}', name: 'app_structure_edit', methods: ['GET', 'POST'])]
    public function edit(
        Structure $structure,
        // Permission $permission,
        Request $request, 
        FeatureRepository $featureRepository,
        PermissionRepository $permissionRepository,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
        ): Response
        {
            // $structure = new Structure();
            // $feature->
            // $user = new User(); 
            $form = $this->createForm(StructureType::class, $structure);
            
            // dump($structure->getPermissions()[0]);
            // $structure->getPermissions()[0];
            // dd(count($structure->getPermissions()));
            
            // $structure->addPermission($allPermissions);
            ///////dump($structure->getPermissions());
            // dd($form->get('permission'));
            // dump($form->setParent());
            $allFeatures = $form->get('feature')->getData();
            // $allFeatures = $form->getData();
            // $allFeatures[0]->setData(true);
            // dd($allFeatures);
            // dd($form->get('feature'));
            // dd($allFeatures->getParent());
            
        // Récuperer toute le nbre max permissions existantes
        $nbMaxFeature = count($featureRepository->findAll());
        $allFeatures = $featureRepository->findAll();
        $structurePermissions = $permissionRepository->findBy(['structure' => $structure]);
        
        // dd($structurePermissions);

        $form->handleRequest($request);
        
        // if ($form->isSubmitted() && $form->isValid()) {
        //     $structure = $form->getData();
        //     // Récupérer le commercial qui a effectuer l'ajout / modfication
        //     $structure->setCommercial($this->getUser());
        //     // Récupérer le manager et l'affecté dans user
        //     $user =  $form->get('manager')->getData();
        //     // Création du slug User (manager)
        //     // $user->setSlug($user->getFirstname());
        //     $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower() . 
        //     '-' . $sluggerInterface->slug($user->getLastname())->lower());
        //     // dump($form->get('feature'));
            
        //     $franchise = $form->get('franchise')->getData();

            
        //     $structure->setFranchise($franchise);
        //     $structure->setSlug($structure->getName());
        //     // $structure->setCreatedAt(new \DateTimeImmutable());
        //     $structure->setManager($user);
        //     $structure->setisActive(true);
            
        //     $em->persist($user);
        //     $em->persist($structure);
            
        //     // dd($features->getData()[0]);
        //     // // TODO A MODIFIER ENTITY + MIGRATION 
            
        //     // Récuperer toute le nbre max permissions existantes
        //     $nbMaxFeature = count($featureRepository->findAll());
        //     $allFeatures = $featureRepository->findAll();
        //     // $j=0;
        //     for ($i=0; $i < $nbMaxFeature; $i++) { 
        //         $features = $form->get('feature')->getData();
        //         $permission = new Permission();

        //         $permission->addCommercial($this->getUser());
        //         $permission->setStructure($structure);
        //         $permission->setFranchise($franchise);
        //         $permission->setFeature($allFeatures[$i]);

        //         foreach ($features as $feature) {
        //             // dump($feature);
        //             if ($allFeatures[$i]->getId() === $feature->getId()) {
        //                 $permission->setisActive(true);
        //                 break;
        //             }
        //             $permission->setisActive(false);
        //         }
        //         $permission->setisGlobal(false);
        //         // $permission->setCreatedAt(new \DateTimeImmutable());
        //         $em->persist($permission);

        //     }

        //     $em->flush();
        //     return $this->redirectToRoute('app_structure');
            
        // }
        
        return $this->renderForm('pages/structure/new.html.twig', [
            'structure' => $structure,
            'form' => $form,
        ]);
    }
    
    #[Route('/structure/{id}', name: 'app_structure_show', methods: ['GET'])]
    public function show(Structure $structure): Response
    {
        return $this->render('pages/structure/show.html.twig', [
            'structure' => $structure,
        ]);
    }

    #[Route('/structure/{id}', name: 'app_structure_delete', methods: ['POST'])]
    public function delete(Request $request, Structure $structure, StructureRepository $structureRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$structure->getId(), $request->request->get('_token'))) {
            $structureRepository->remove($structure, true);
        }

        return $this->redirectToRoute('app_structure', [], Response::HTTP_SEE_OTHER);
    }
}
