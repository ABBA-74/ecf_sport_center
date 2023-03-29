<?php

namespace App\Controller;

use App\Entity\Franchise;
use App\Repository\FranchiseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ShowFranchiseController extends AbstractController
{
    #[Route('/franchise/{slug}', name: 'app_franchise_show', methods: ['GET'])]
    public function show(Franchise $franchise): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        // l'utilisateur n'a pas les droits admin et ni les droit commercial > verification si propriétaire
        if (!$this->isGranted('ROLE_ADMIN') && !$this->isGranted('ROLE_COMMERCIAL') ) {
            if( $user->getFranchise() == null || $franchise->getSlug() !== ($user->getFranchise()->getSlug()) ) 
            {
                throw new AccessDeniedHttpException('Accès refusé...');
            }
         }

        $structures = $franchise->getStructure();

        return $this->render('pages/franchise/show.html.twig', [
            'franchise' => $franchise,
            'structures' => $structures,
        ]);
    }
}
