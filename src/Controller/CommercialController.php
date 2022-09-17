<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommercialController extends AbstractController
{
    #[Route('/commercial', name: 'app_commercial')]
    // public function index(UserRepository $userRepository): Response
    // {
    //     $commercials = $userRepository->findByRole('ROLE_COMMERCIAL');

    //     return $this->render('pages/commercial/index.html.twig', [
    //         'commercials' => $commercials,
    //     ]);
    // }
    public function index(
        UserRepository $userRepository,
        Request $request
        ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveCommercial = $request->get('opt') == 'true' ?? null;
        $searchCommercial = $request->get('search');
        $modeDisplay = $request->get('mode');

        // Get franchise according to the current page
        $commercials = $userRepository->getPaginatedCommercials($currentPage, $limit, $searchCommercial);

        // Get total nbre of franchise
        $totalCommercials = $userRepository->getTotalCommercials($searchCommercial);
        
        // Check if ajax request
        if($request->get('ajax')){
            return new JsonResponse([
                "content" => $this->renderView('pages/commercial/_commercial-list.html.twig', [
                    'commercials' => $commercials,
                    'total' => $totalCommercials,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay
                ])
            ]);
        }
        return $this->render('pages/commercial/index.html.twig', [
            'commercials' => $commercials,
            'total' => $totalCommercials,
            'limit' => $limit,
            'currentPage' => $currentPage,
            'modeDisplay' => $modeDisplay
        ]);
    }


    #[Route('/commercial/new', name: 'app_commercial_new')]
    public function new()
    {
        return $this->render('pages/commercial/index.html.twig4');
    }
    
    
    #[Route('/commercial/edit/{slug}', name: 'app_commercial_edit', methods: ['GET', 'POST'])]
    public function edit()
    {
        return $this->render('pages/commercial/index.html.twig4');

    }


    #[Route('/commercial/{slug}', name: 'app_commercial_show', methods: ['GET'])]
    public function show()
    {

    }


    #[Route('/commercial/{slug}', name: 'app_commercial_delete', methods: ['POST'])]
    public function delete()
    {

    }   
}
