<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ResetPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ResetPasswordController extends AbstractController
{

    #[Route(path: '/account/change-password/{slug}', name: 'app_new-password')]
    public function resetPassword(
        Request $request,
        User $user,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $userPasswordHasherInterface,
        AuthenticationUtils $authenticationUtils
        ): Response
    {


        $form = $this->createForm(ResetPasswordType::class);
        // get the login error if there is one
        // $error = $authenticationUtils->getLastAuthenticationError();

        
        // if ($this->isCsrfTokenValid('delete'.$structure->getId(), $request->request->get('_token'))) {            
        //     $structureRepository->remove($structure, true);

        //     // Message flash confirmation structure supprimée
        //     $this->addFlash('danger', 'La structure a été supprimée avec succès !');
            
        // }
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {

            // récupérer l'id du user
            // dd($this->getUser()->getUserIdentifier());
            // $user = $this->getUser();

            // récupérer le mdp
            $newPlainPassword = $form->get('password')->getData();

            // hasher + encoder le mdp
            $user->setPassword($userPasswordHasherInterface
                ->hashPassword($user, $newPlainPassword));

            // enregistrer en bdd
            $em->persist($user);
            $em->flush();

            // Message flash confirmation modification structure
            $this->addFlash('info', 'Le mot de passe a été réinitialisé avec succès !');

            return $this->redirectToRoute('app_home');
        }
        return $this->renderForm('pages/security/reset-password.html.twig', [
            'form' => $form,
        ]);
    }

}