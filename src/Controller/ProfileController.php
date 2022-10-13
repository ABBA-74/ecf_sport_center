<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

// Controller used for all users (include commercials + franchises managers + structures managers)

class ProfileController extends AbstractController
{
   
    
    #[Route('/profile/{slug}', name: 'app_profile_edit', methods: ['GET', 'POST'])]
    public function edit(
        User $user,
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
    ): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->remove('password');
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower(). '-' . $sluggerInterface->slug($user->getLastname())->lower());
            // $user->setRoles(['ROLE_COMMERCIAL']);
            $user->setUpdatedAt(new \DateTimeImmutable());

            $em->persist($user);
            $em->flush();

            // Flash Message : confirmation modification user
            $this->addFlash('info', 'Vos informations personnelles ont été modifié avec succès !');

            return $this->redirectToRoute('app_home');
        }
        return $this->renderForm('pages/user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
            'isProfilePage' => true
        ]);
    }
}
