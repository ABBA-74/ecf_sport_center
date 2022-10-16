<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('pages/home/index.html.twig');
    }
    
    // Test mail
    #[Route('/register', name: 'app_test_mail')]
    public function register(UserRepository $userRepository): Response
    {
        $user = $userRepository->findBy(['id' => 162]);
        dump($user);

        // return $this->render('emails/register-mail.html.twig', [
        return $this->render('emails/notif-modifications-mail.html.twig', [
        // return $this->render('emails/registration-confirmation-mail.html.twig', [
            'user' => $user[0],
            'token' => 'xxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxx'
        ]);
    }
}