<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Repository\UserRepository;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ResetPasswordController extends AbstractController
{

    // #[Route(path: '/account/change-password/{slug}', name: 'app_new-password')]
    #[Route(path: '/account/change-password', name: 'app_new-password')]
    public function resetPassword(
        Request $request,
        // User $user,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $userPasswordHasherInterface,
        // AuthenticationUtils $authenticationUtils,
        UserRepository $userRepository,
        SendMailService $sendMailService
        ): Response
    {
        $form = $this->createForm(ResetPasswordType::class);
        // get the login error if there is one
        // $error = $authenticationUtils->getLastAuthenticationError();

        
        $form->handleRequest($request);
        $userMail = $this->getUser()->getUserIdentifier();
        $user = $userRepository->findOneBy(['email' => $userMail]);
        dump($user);
        
        if ($form->isSubmitted() && $form->isValid()) {
            // récupérer le mdp
            $newPlainPassword = $form->get('password')->getData();

            // hasher + encoder le mdp
            $user->setPassword($userPasswordHasherInterface
                ->hashPassword($user, $newPlainPassword));

            // if new user
            if (!$user->getIsActive()) {
                // remove role not active and change property
                $user->removeRole('ROLE_NOT_ACTIVE');
                $user->setIsActive(true);

                // Envoie mail au manager de la structure - demande activation compte
                $sendMailService->send(
                'no-reply@sport-center.abb-dev.fr',
                $user->getEmail(), '',
                'Confirmation d\'activation de votre compte Sport Center',
                'registration-confirmation-mail',
                [
                    'user' => $user,
                    ]
                );
                $this->addFlash('info', "Votre compte est activé.\nLe mot de passe a été réinitialisé avec succès !");
            } else {

                $this->addFlash('info', 'Le mot de passe a été réinitialisé avec succès !');
            }
            // enregistrer en bdd
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('app_home');
        }
        return $this->renderForm('pages/security/reset-password.html.twig', [
            'form' => $form,
        ]);
    }

}
