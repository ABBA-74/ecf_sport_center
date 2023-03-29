<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        /**
         * @var User $user
         */
        if($user && !$user->getIsActive())
        {
            $em->flush($user);
            $this->addFlash('danger', "Votre compte est inactif\nConnectez vous avec le lien fourni par email\nOu contactez-nous par téléphone: 02 03 04 05 06");
        }
        return $this->render('pages/home/index.html.twig');
    }
}