<?php

namespace App\Controller;

use App\Entity\Franchise;
use App\Repository\FranchiseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FranchiseController extends AbstractController
{
    #[Route('/franchise', name: 'app_franchise', methods: ['GET', 'POST'])]
    public function index(
        FranchiseRepository $franchiseRepository,
        Request $request
        ): Response
    {
        // Set limit of item per page
        $limit = 6;

        // Get current page + filters
        $currentPage = (int)$request->query->get('page', 1);
        $isActiveFranchise = $request->get('opt') == 'true' ?? null;
        $searchFranchise = $request->get('search');
        $modeDisplay = $request->get('mode');


                // Get franchise according to the current page
                $franchises = $franchiseRepository->getPaginatedFranchises($currentPage, $limit, $isActiveFranchise, $searchFranchise);

                // Get total nbre of franchise
                $totalFranchises = $franchiseRepository->getTotalFranchises($isActiveFranchise, $searchFranchise);
        
                // Check if ajax request
                if($request->get('ajax')){
                    return new JsonResponse([
                        "content" => $this->renderView('pages/franchise/_franchise-list.html.twig', [
                            'franchises' => $franchises,
                            'total' => $totalFranchises,
                            'limit' => $limit,
                            'currentPage' => $currentPage,
                            'modeDisplay' => $modeDisplay
                        ])
                    ]);
                }
                return $this->render('pages/franchise/index.html.twig', [
                    'franchises' => $franchises,
                    'total' => $totalFranchises,
                    'limit' => $limit,
                    'currentPage' => $currentPage,
                    'modeDisplay' => $modeDisplay
                ]);
        // $franchises = $franchiseRepository->findAll();

        // return $this->render('pages/franchise/index.html.twig', [
        //     'franchises' => $franchises,
        // ]);
    }
    #[Route('/franchise/new', name: 'app_franchise_new')]
    public function new(FranchiseRepository $franchiseRepository): Response
    {
        $franchises = $franchiseRepository->findAll();

        return $this->render('pages/franchise/index.html.twig', [
            'franchises' => $franchises,
        ]);
    }
    #[Route('/franchise/edit/{slug}', name: 'app_franchise_edit', methods: ['GET', 'POST'])]
    public function edit(FranchiseRepository $franchiseRepository): Response
    {
        $franchises = $franchiseRepository->findAll();

        return $this->render('pages/franchise/index.html.twig', [
            'franchises' => $franchises,
        ]);
    }


    #[Route('/franchise/{slug}', name: 'app_franchise_show', methods: ['GET'])]
    public function show(FranchiseRepository $franchiseRepository, Franchise $franchise): Response
    {
        $structures = $franchise->getStructure();
        return $this->render('pages/franchise/show.html.twig', [
            'franchise' => $franchise,
            'structures' => $structures,
        ]);
    }


    #[Route('/franchise/{slug}', name: 'app_franchise_delete', methods: ['POST'])]
    public function delete(FranchiseRepository $franchiseRepository): Response
    {
        $franchises = $franchiseRepository->findAll();

        return $this->render('pages/franchise/index.html.twig', [
            'franchises' => $franchises,
        ]);
    }
}
