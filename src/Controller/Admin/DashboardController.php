<?php

namespace App\Controller\Admin;

use App\Entity\Franchise;
use App\Repository\FeatureRepository;
use App\Repository\FranchiseRepository;
use App\Repository\StructureRepository;
use App\Service\ChartsService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_COMMERCIAL')")]
class DashboardController extends AbstractController
{
  #[Route('/admin/dashboard/', name: 'app_dashboard')]
    public function index(
        FranchiseRepository $franchiseRepository,
        StructureRepository $structureRepository,
        FeatureRepository $featureRepository,
        ChartsService $chartsService
        ): Response
    {
        $totalFeatures = count($featureRepository->findAll());
        $franchises = $franchiseRepository->findBy([], ['createdAt' => 'DESC']);;
        $structures = $structureRepository->findBy([], ['createdAt' => 'DESC']);

        $totalActiveFranchises = $franchiseRepository->getTotalActiveFranchises();
        $totalActiveStructures = $structureRepository->getTotalActiveStructures();
        $totalActiveFeatures = $featureRepository->getTotalActiveFeatures();

        
        // init
        $franchiseName = [];
        $franchiseNberStructure = [];
        $franchiseNberStructureActive = [];
        $franchiseNberStructureInactive = [];
        $qtyPermissions = [];
        
        // Get qty structure + active structure + qty permissions + qty active permissions per franchise
        foreach ($franchises as $key => $el) {
            $franchiseName[] = $el->getName();
            $structuresOfFranchise = $el->getStructure();

            $franchiseNberStructure[] = count($structuresOfFranchise);

            // get qty of structure active / franchise
            $i = $qtyStructureActive = 0;
            foreach ($structuresOfFranchise as $structureOfFranchise) {
                $qtyStructureActive = $structureOfFranchise->getIsActive() ? ++$i : $i;
            }
            $franchiseNberStructureActive[] = $qtyStructureActive;

            // get qty of structure inactive / franchise
            $franchiseNberStructureInactive[] =  $franchiseNberStructure[$key] - $franchiseNberStructureActive[$key];

            // get qty of active globals permissions
            $permissions = $el->getPermissions();
            $qtyPermissions[] = count($permissions);
            
            $j = $k = 0;
            $qtyGlobalPermission = $qtyGlobalPermissionActive = 0;
            foreach ($permissions as $permission) {
                if ($permission->getIsGlobal() == true){
                    $qtyGlobalPermission = ++$k;
                    if ($permission->getIsActive() == true) {
                        $qtyGlobalPermissionActive = ++$j;
                    };
                }
            }
            $globalsPermissionsActive[] = $qtyGlobalPermissionActive;
            $globalsPermissions[] = $qtyGlobalPermission;
        }

        // CHART 1 - Get Bar Chart of all franchises
        $chartAllFranchises = $chartsService->getChartAllFranchises($franchises);

        // CHART 2 - Get Polar Area Chart of selected franchise (input select)
        // for the first load of the page dashboard > 1st franchise used
        $franchise = $franchises[0];
        $chartDetailsStructures = $chartsService->getChartDetailsStructures($franchise);

        // CHART 3 - Get Bar Chart of all franchises
        $chartDetailsFeatures = $chartsService->getChartDetailsFeatures();

        return $this->render('pages/dashboard/index.html.twig', [
            "franchises" => $franchises,
            "structures" => $structures,
            'globalsPermissions' => $globalsPermissions,
            'globalsPermissionsActive' => $globalsPermissionsActive,
            'totalFeatures' => $totalFeatures,
            'totalActiveFranchises' => $totalActiveFranchises,
            'totalActiveStructures' => $totalActiveStructures,
            'totalActiveFeatures' => $totalActiveFeatures,
            'chartAllFranchises' => $chartAllFranchises,
            'chartDetailsStructures' => $chartDetailsStructures,
            'chartDetailsFeatures' => $chartDetailsFeatures,
        ]);
    }


    #[Route('/admin/dashboard/{id}', name: 'app_dashboard_franchise', methods: ['GET', 'POST'])]
    public function getFranchise(
        Request $request, 
        Franchise $franchise,
    ): Response 
    {
        // Only include it if the function is reserved for ajax calls only.
        if (!$request->isXmlHttpRequest()) {
            // return new JsonResponse(array(
            //     'status' => 'Error',
            //     'message' => 'Error'),
            // 400);
            throw $this->createNotFoundException();
        }

        $structuresName = [];
        $structuresQtyActivePermission = [];
        $structures = $franchise->getStructure();

        foreach ($structures as $structure) {
            $i = 0;
            $structuresName[] = $structure->getName();
            $structurePermissions = $structure->getPermissions();
            foreach ($structurePermissions as $permission) {
                $permission->getIsActive() &&  $i++;
            }
            $structuresQtyActivePermission[] = $i;
        }

        $data[] = $structuresName; 
        $data[] = $structuresQtyActivePermission;

        return $this->json([
                $data, Response::HTTP_OK
        ]);
    }
}
