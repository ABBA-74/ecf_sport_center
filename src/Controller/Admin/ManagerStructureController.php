<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;


#[Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_COMMERCIAL')")]
class ManagerStructureController extends AbstractController
{
    #[Route('/admin/managers-structures', name: 'app_manager-structure', methods: ['GET', 'POST'])]
    public function index(
        UserRepository $userRepository,
        Request $request
    ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveStructureManager = $request->get('opt') == 'true' ?? null;
        $searchStructureManager = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get all structures managers according to the current page
        $structuresManagers = $userRepository->getPaginatedUsers($currentPage, $limit, $isActiveStructureManager, $searchStructureManager, 'ROLE_MANAGER_STRUCTURE');
        
        // Get total nbre of structures managers
        $totalStructuresManagers = $userRepository->getTotalUsers($isActiveStructureManager, $searchStructureManager, 'ROLE_MANAGER_STRUCTURE');
        
        // Check if ajax request
        if($request->get('ajax')){

            return new JsonResponse([
                "content" => $this->renderView('pages/user/_user-list.html.twig', [
                    'users' => $structuresManagers,
                    'total' => $totalStructuresManagers,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay,
                    'categoryUser' => 'manager-structure'
                ])
            ]);
        }
        return $this->render('pages/user/index.html.twig', [
            'users' => $structuresManagers,
            'total' => $totalStructuresManagers,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay,
            'categoryUser' => 'manager-structure'
        ]);
    }
    
    #[Route('/admin/manager-structure/edit/{slug}', name: 'app_manager-structure_edit', methods: ['GET', 'POST'])]
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

            // Flash Message : confirmation modification structure manager
            $this->addFlash('info', 'Le manager de la structure a été modifié avec succès !');

            return $this->redirectToRoute('app_manager-structure');
        }
        return $this->renderForm('pages/user/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }


    #[Route('/admin/manager-structure/disable/{slug}', name: 'app_manager-structure_disable', methods: ['POST'])]
    public function disable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(true);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation deactivation structure manager
            $this->addFlash('danger', 'Le manager de la structure a été désactivé avec succès !');
        }
        return $this->redirectToRoute('app_manager-structure', [], Response::HTTP_SEE_OTHER);
    }  


    #[Route('/admin/manager-structure/enable/{slug}', name: 'app_manager-structure_enable', methods: ['POST'])]
    public function enable(Request $request, User $user, EntityManagerInterface $em): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {

            $user->setIsBlocked(false);
            $user->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            // Flash Message : confirmation activation structure manager
            $this->addFlash('success', 'Le manager de la structure a été activé avec succès !');
        }
        return $this->redirectToRoute('app_manager-structure', [], Response::HTTP_SEE_OTHER);
    }   
}
