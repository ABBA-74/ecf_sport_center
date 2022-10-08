<?php

namespace App\Controller;

use App\Entity\Feature;
use App\Form\FeatureType;
use App\Repository\FeatureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class FeatureController extends AbstractController
{
    // #[Route('/feature', name: 'app_feature')]
    // public function index(FeatureRepository $featureRepository): Response
    // {
    //     $features = $featureRepository->findAll();

    //     return $this->render('pages/feature/index.html.twig', [
    //         'features' => $features,
    //     ]);
    // }
    #[Route('/admin/feature', name: 'app_feature')]
    public function index(FeatureRepository $featureRepository, Request $request): Response
{
    // Set limit of item per page
    $limit = 6;

    // Get current page + filters
    $currentPage = (int)$request->query->get('page', 1);
    $isActiveFeature = $request->get('opt') == 'true' ?? null;
    $searchFeature = $request->get('search');
    $modeDisplay = $request->get('mode');

    // Get features according to the current page
    $features = $featureRepository->getPaginatedFeatures($currentPage, $limit, $isActiveFeature, $searchFeature);

    // Get total nbre of features
    $totalFeatures = $featureRepository->getTotalFeatures($isActiveFeature, $searchFeature);
    
    // Check if ajax request
    if($request->get('ajax')){
        return new JsonResponse([
            "content" => $this->renderView('pages/feature/_feature-list.html.twig', [
                'features' => $features,
                'total' => $totalFeatures,
                'limit' => $limit,
                'currentPage' => $currentPage,
                'modeDisplay' => $modeDisplay
            ])
        ]);
    }
    return $this->render('pages/feature/index.html.twig', [
        'features' => $features,
        'total' => $totalFeatures,
        'limit' => $limit,
        'currentPage' => $currentPage,
        'modeDisplay' => $modeDisplay
    ]);
    }

    
    #[Route('/admin/feature/new', name: 'app_feature_new', methods: ['GET', 'POST'])]
    public function new(
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
    ): Response
    {
        $feature = new Feature();

        $form = $this->createForm(FeatureType::class, $feature);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $feature->setSlug($sluggerInterface->slug($form->get('name')->getData())->lower());
            $feature->setCreatedAt(new \DateTimeImmutable());
            $feature->setAdminCommercial($this->getUser());
            $feature->setIsActive(true);

            $em->persist($feature);
            $em->flush();

            // Message flash confirmation nouvelle fonctionnalité
            $this->addFlash('success', 'La fonctionnalité a été ajoutée avec succès !');

            return $this->redirectToRoute('app_feature');
        }
        return $this->renderForm('pages/feature/new.html.twig', [
            'form' => $form,
            'feature' => $feature,
        ]);
    }
    
    
    #[Route('/admin/feature/edit/{slug}', name: 'app_feature_edit', methods: ['GET', 'POST'])]
    public function edit(
        Feature $feature,
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
    ): Response
    {
        $form = $this->createForm(FeatureType::class, $feature);
        
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $feature = $form->getData();
            $feature->setSlug($sluggerInterface->slug($form->get('name')->getData())->lower());
            $feature->setUpdatedAt(new \DateTimeImmutable());
            $feature->setAdminCommercial($this->getUser());
            $em->persist($feature);
            $em->flush();

            // Message flash confirmation modification fonctionnalité
            $this->addFlash('info', 'La fonctionnalité a été modifiée avec succès !');

            return $this->redirectToRoute('app_feature');
        }
        return $this->renderForm('pages/feature/edit.html.twig', [
            'form' => $form,
            'feature' => $feature,
        ]);
    }
    
    
    #[Route('/admin/feature/disable/{slug}', name: 'app_feature_disable', methods: ['POST'])]
    public function disable(Request $request, Feature $feature, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$feature->getId(), $request->request->get('_token'))) {
            // $featureRepository->remove($feature, true);
            // Remove only role Commercial to keep all informations done in past by this feature
            $feature->setIsActive(false);
            $feature->setUpdatedAt(new \DateTimeImmutable());
            $feature->setAdminCommercial($this->getUser());
            $em->flush();

            // Message flash confirmation desactivation de la fonctionnalité
            $this->addFlash('danger', 'La fonctionnalité a été désactivé avec succès !');
        }
        return $this->redirectToRoute('app_feature', [], Response::HTTP_SEE_OTHER);
    }  
    
    
    #[Route('/admin/feature/enable/{slug}', name: 'app_feature_enable', methods: ['POST'])]
    public function enable(Request $request, Feature $feature, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$feature->getId(), $request->request->get('_token'))) {
            $feature->setIsActive(true);
            $feature->setUpdatedAt(new \DateTimeImmutable());
            $feature->setAdminCommercial($this->getUser());
            $em->flush();

            // Message flash confirmation activation de la fonctionnalité
            $this->addFlash('success', 'La fonctionnalité a été activé  avec succès !');
        }
        return $this->redirectToRoute('app_feature', [], Response::HTTP_SEE_OTHER);
    }
}
