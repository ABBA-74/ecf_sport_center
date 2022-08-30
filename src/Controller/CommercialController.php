<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommercialController extends AbstractController
{
    #[Route('/commercial', name: 'app_commercial')]
    public function index(UserRepository $userRepository): Response
    {
        $commercials = $userRepository->findByRole('ROLE_COMMERCIAL');

        return $this->render('pages/commercial/index.html.twig', [
            'commercials' => $commercials,
        ]);
    }
}
