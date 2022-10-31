<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
// use Symfony\Component\Security\Core\Security as SecurityCore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


// #[SecurityCore("is_granted('ROLE_ADMIN') or is_granted('ROLE_COMMERCIAL')")]
#[Security("is_granted('ROLE_ADMIN')")]
class CommercialController extends AbstractController
{
    #[Route('/admin/commercials', name: 'app_commercial', methods: ['GET', 'POST'])]
    public function index(
        UserRepository $userRepository,
        Request $request
    ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveCommecial = $request->get('opt') == 'true' ?? null;
        $searchCommecial = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get all commercials according to the current page
        $commercials = $userRepository->getPaginatedUsers($currentPage, $limit, $isActiveCommecial, $searchCommecial, 'ROLE_COMMERCIAL');
        
        // Get total nbre of commercials
        $totalCommercials = $userRepository->getTotalUsers($isActiveCommecial, $searchCommecial, 'ROLE_COMMERCIAL');
        
        // Check if ajax request
        if($request->get('ajax')){

            return new JsonResponse([
                "content" => $this->renderView('pages/user/_user-list.html.twig', [
                    'users' => $commercials,
                    'total' => $totalCommercials,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay,
                    'categoryUser' => 'commercial'
                ])
            ]);
        }
        return $this->render('pages/user/index.html.twig', [
            'users' => $commercials,
            'total' => $totalCommercials,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay,
            'categoryUser' => 'commercial'
        ]);
    }
    
    #[Route('/admin/commercial/edit/{slug}', name: 'app_commercial_edit', methods: ['GET', 'POST'])]
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
            $user->setUpdatedAt(new \DateTimeImmutable());

            $em->persist($user);
            $em->flush();

            // Flash Message : confirmation modification commercial
            $this->addFlash('info', 'Le commercial a été modifié avec succès !');

            return $this->redirectToRoute('app_commercial');
        }
        return $this->renderForm('pages/user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }


    #[Route('/admin/commercial/disable/{slug}', name: 'app_commercial_disable', methods: ['POST'])]
    public function disable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(true);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation deactivation commercial
            $this->addFlash('danger', 'Le commercial a été désactivé avec succès !');
        }
        return $this->redirectToRoute('app_commercial', [], Response::HTTP_SEE_OTHER);
    }  


    #[Route('/admin/commercial/enable/{slug}', name: 'app_commercial_enable', methods: ['POST'])]
    public function enable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(false);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation activation commercial
            $this->addFlash('success', 'Le commercial a été activé avec succès !');
        }
        return $this->redirectToRoute('app_commercial', [], Response::HTTP_SEE_OTHER);
    } 

    #[Route('/admin/commercial/new', name: 'app_commercial_new', methods: ['GET', 'POST'])]
    public function new(
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $sluggerInterface,
    ): Response
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->remove('password');

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setSlug($sluggerInterface->slug($user->getFirstname())->lower(). '-' . $sluggerInterface->slug($user->getLastname())->lower());
            $user->setRoles(['ROLE_COMMERCIAL']);

            // TODO SEND MAIL FOR THE NEW COMMERCIAL + ENCODE PASSWORD
            $user->setPassword('temp');
            $user->setIsActive(false);

            $em->persist($user);
            $em->flush();

            // Message flash confirmation nouveau commercial
            $this->addFlash('success', 'Le commercial a été ajouté avec succès !');

            return $this->redirectToRoute('app_commercial');
        }
        return $this->renderForm('pages/user/new.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }
}
