<?php

namespace App\Controller;

use App\Entity\Structure;
use App\Repository\StructureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StructureController extends AbstractController
{
    // #[Route('/structure', name: 'app_structure', methods: ['GET', 'POST'])]
    #[Route('/structure', name: 'app_structure')]
    public function index(StructureRepository $structureRepository): Response
    {
        $structures = $structureRepository->findAll();

        return $this->render('pages/structure/index.html.twig', [
            'structures' => $structures,
        ]);
    }

    #[Route('/structure/{id}', name: 'app_structure_show')]
    public function show(Structure $structure): Response
    {
        return $this->render('pages/structure/show.html.twig', [
            'structure' => $structure,
        ]);
    }
}
