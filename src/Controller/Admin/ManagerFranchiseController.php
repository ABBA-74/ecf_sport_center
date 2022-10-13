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

class ManagerFranchiseController extends AbstractController
{
    #[Route('/admin/managers-franchises', name: 'app_manager-franchise', methods: ['GET', 'POST'])]
    public function index(
        UserRepository $userRepository,
        Request $request
    ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveFranchiseManager = $request->get('opt') == 'true' ?? null;
        $searchFranchiseManager = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get all franchises managers according to the current page
        $franchisesManagers = $userRepository->getPaginatedUsers($currentPage, $limit, $isActiveFranchiseManager, $searchFranchiseManager, 'ROLE_MANAGER_FRANCHISE');
        
        // Get total nbre of franchises managers
        $totalFranchisesManagers = $userRepository->getTotalUsers($isActiveFranchiseManager, $searchFranchiseManager, 'ROLE_MANAGER_FRANCHISE');
        
        // Check if ajax request
        if($request->get('ajax')){

            return new JsonResponse([
                "content" => $this->renderView('pages/user/_user-list.html.twig', [
                    'users' => $franchisesManagers,
                    'total' => $totalFranchisesManagers,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay,
                    'categoryUser' => 'manager-franchise'
                ])
            ]);
        }
        return $this->render('pages/user/index.html.twig', [
            'users' => $franchisesManagers,
            'total' => $totalFranchisesManagers,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay,
            'categoryUser' => 'manager-franchise'
        ]);
    }
    
    #[Route('/admin/manager-franchise/edit/{slug}', name: 'app_manager-franchise_edit', methods: ['GET', 'POST'])]
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

            // Flash Message : confirmation modification franchise manager
            $this->addFlash('info', 'Le manager de la franchise a été modifié avec succès !');

            return $this->redirectToRoute('app_manager-franchise');
        }
        return $this->renderForm('pages/user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }


    #[Route('/admin/manager-franchise/disable/{slug}', name: 'app_manager-franchise_disable', methods: ['POST'])]
    public function disable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(true);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation deactivation franchise manager
            $this->addFlash('danger', 'Le manager de la franchise a été désactivé avec succès !');
        }
        return $this->redirectToRoute('app_manager-franchise', [], Response::HTTP_SEE_OTHER);
    }  


    #[Route('/admin/manager-franchise/enable/{slug}', name: 'app_manager-franchise_enable', methods: ['POST'])]
    public function enable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(false);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation activation franchise manager
            $this->addFlash('success', 'Le manager de la franchise a été activé avec succès !');
        }
        return $this->redirectToRoute('app_manager-franchise', [], Response::HTTP_SEE_OTHER);
    }   
}
