<?php

namespace App\Controller;

use App\Entity\Structure;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Annotation\Route;


class ShowStructureController extends AbstractController
{
    #[Route('/structure/{slug}', name: 'app_structure_show', methods: ['GET'])]
    public function show(Structure $structure, string $slug): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        // l'utilisateur n'a pas les droits admin et ni les droit commercial > verification si propriétaire
        if (!$this->isGranted('ROLE_ADMIN') && !$this->isGranted('ROLE_COMMERCIAL') ) {
            // Si Manager Structure / Manager Franchise
            if($this->isGranted('ROLE_MANAGER_STRUCTURE')) {
                if( $user->getStructure() == null || $structure->getSlug() !== ($user->getStructure()->getSlug()) ) 
                {
                    throw new AccessDeniedHttpException('Accès refusé...');
                }
            } else if ($this->isGranted('ROLE_MANAGER_FRANCHISE')) {
                $AccessDenied = true;
                $structures = $user->getFranchise()->getStructure();
                if($structures != null) {
                    foreach ($structures as $structure) {
                        if($structure->getSlug() === $slug) {
                            $AccessDenied = false;
                            break;
                        }
                    }
                }
                $AccessDenied && throw new AccessDeniedHttpException('Accès refusé...');
            }
         }


        return $this->render('pages/structure/show.html.twig', [
            'structure' => $structure,
        ]);
    }
}
