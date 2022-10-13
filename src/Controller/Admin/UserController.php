<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

// Controller used for all users (include commercials + franchises managers + structures managers)

class UserController extends AbstractController
{
    #[Route('/admin/users', name: 'app_user', methods: ['GET', 'POST'])]
    public function index(
        UserRepository $userRepository,
        Request $request
    ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveUsers = $request->get('opt') == 'true' ?? null;
        $searchUser = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get all users according to the current page
        $allCategoryUsers = $userRepository->getPaginatedUsers($currentPage, $limit, $isActiveUsers, $searchUser);

        // Get total nbre of all users
        $totalallCategoryUsers = $userRepository->getTotalUsers($isActiveUsers, $searchUser);
        
        // Check if ajax request
        if($request->get('ajax')){
            return new JsonResponse([
                "content" => $this->renderView('pages/user/_user-list.html.twig', [
                    'users' => $allCategoryUsers,
                    'total' => $totalallCategoryUsers,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay,
                    'categoryUser' => 'user'
                ])
            ]);
        }
        return $this->render('pages/user/index.html.twig', [
            'users' => $allCategoryUsers,
            'total' => $totalallCategoryUsers,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay,
            'categoryUser' => 'user'
        ]);
    }

    
    #[Route('/admin/user/edit/{slug}', name: 'app_user_edit', methods: ['GET', 'POST'])]
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
            $this->addFlash('info', 'L\'utilisateur a été modifié avec succès !');

            return $this->redirectToRoute('app_user');
        }
        return $this->renderForm('pages/user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }


    #[Route('/admin/user/disable/{slug}', name: 'app_user_disable', methods: ['POST'])]
    public function disable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            // isBlocked == true > User blocked 
            $user->setIsBlocked(true);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation deactivation user
            $this->addFlash('danger', 'L\'utilisateur a été désactivé avec succès !');
        }
        return $this->redirectToRoute('app_user', [], Response::HTTP_SEE_OTHER);
    }  


    #[Route('/admin/user/enable/{slug}', name: 'app_user_enable', methods: ['POST'])]
    public function enable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(false);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation activation user
            $this->addFlash('success', 'L\'utilisateur a été activé avec succès !');
        }
        return $this->redirectToRoute('app_user', [], Response::HTTP_SEE_OTHER);
    }   
}
