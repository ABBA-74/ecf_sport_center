<?php

namespace App\Controller;

use App\Repository\FranchiseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FranchiseController extends AbstractController
{
    #[Route('/franchise', name: 'app_franchise')]
    public function index(FranchiseRepository $franchiseRepository): Response
    {
        $franchises = $franchiseRepository->findAll();

        return $this->render('pages/franchise/index.html.twig', [
            'franchises' => $franchises,
        ]);
    }
}
