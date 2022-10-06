<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LegalInformationController extends AbstractController
{
    #[Route('/cgu-conditions-generales-d-utilisation', name: 'app_cgu')]
    public function cgu(): Response
    {
        return $this->render('pages/legal_information/cgu.html.twig', []);
    }
}