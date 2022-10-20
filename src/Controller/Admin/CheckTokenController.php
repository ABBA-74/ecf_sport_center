<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Service\JWTService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CheckTokenController extends AbstractController
{
    #[Route('/verification-token/{token}', name: 'app_verify_user', methods: ['GET'])]
    public function verifyUser(
        string $token,
        JWTService $jWTService,
        UserRepository $userRepository,
        EntityManagerInterface $em
    )
    {
         // Récupération du payload
         $payload = $jWTService->getPayload($token);

        // Verification du token si format ok + pas expiré + pas de signature modifié
        if ( $jWTService->isValid($token) && !$jWTService->isExpired($token) && $jWTService->isCheckedSignature($token, $this->getParameter('app.jwtsecret')))
        {
            // Récupération du payload
            $payload = $jWTService->getPayload($token);

            // Récupération du user du token
            $user = $userRepository->find($payload['user_id']);

            // Verification user existe + isActive à false
            if($user && $user->getIsActive())
            {
                $user->setIsActive(true);
                $em->flush($user);
                $this->addFlash('success', 'Votre compte a été activé avec succès !');
                return $this->redirectToRoute('app_home');
            }
        }
        // Token invalide / expiré
        if ( !$jWTService->isValid($token) )
        {
            $this->addFlash('danger', "Le lien est invalide.\nVeuillez nous contacter par téléphone: 02 03 04 05 06");
        } 
        if ( $jWTService->isExpired($token) ) 
        {
            $this->addFlash('danger', "Le lien a expiré.\nVeuillez nous contacter par téléphone: 02 03 04 05 06");
        }
        return $this->redirectToRoute('app_login');
    }
}