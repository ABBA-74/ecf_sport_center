<?php

namespace App\Controller;

use App\Repository\FeatureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FeatureController extends AbstractController
{
    #[Route('/feature', name: 'app_feature')]
    public function index(FeatureRepository $featureRepository): Response
    {
        $features = $featureRepository->findAll();

        return $this->render('pages/feature/index.html.twig', [
            'features' => $features,
        ]);
    }
}
