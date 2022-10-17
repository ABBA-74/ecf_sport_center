<?php

namespace App\Service;

use App\Entity\Franchise;
use App\Repository\FeatureRepository;
use App\Repository\PermissionRepository;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class ChartsService 
{
  private $chartBuilder;
  // private $franchiseRepository;
  private $featureRepository;
  private $permissionRepository;
  private $franchises;
  public function __construct(
    ChartBuilderInterface $chartBuilder,
    FeatureRepository $featureRepository,
    PermissionRepository $permissionRepository
    )
  {
      $this->chartBuilder = $chartBuilder;
      $this->featureRepository = $featureRepository;
      $this->permissionRepository = $permissionRepository;
  }
 
  /**
   * Return chart-1 / Bar Chart of all franchises
   *
   * @param array $franchises
   * @return Chart
   */
  public function getChartAllFranchises(array $franchises): Chart
  {
    $this->franchises = $franchises;
    // init labels + datas
    // Get qty structure + active structure + qty permissions + qty active permissions per franchise
    $franchiseName = [];
    foreach ($this->franchises as $key => $el) {
        $franchiseName[] = $el->getName();
        $structuresOfFranchise = $el->getStructure();
        $franchiseNberStructure[] = count($structuresOfFranchise);
        
        // get qty of structure active / franchise
        $i = 0;
        $qtyStructureActive = 0;
        foreach ($structuresOfFranchise as $structureOfFranchise) {
            $qtyStructureActive = $structureOfFranchise->getIsActive() ? ++$i : $i;
        }
        $franchiseNberStructureActive[] = $qtyStructureActive;
        
        // get qty of structure inactive / franchise
        $franchiseNberStructureInactive[] =  $franchiseNberStructure[$key] - $franchiseNberStructureActive[$key];
        
    }
    // init chart
    $chart = $this->chartBuilder->createChart(Chart::TYPE_BAR);
    $chart->setData([
      'labels' => $franchiseName,
      'datasets' => [
          [
              'barThickness' => 44,
              'barPercentage' => 1,
              'label' => 'Structure active',
              'backgroundColor' => '#FF9000',
              'borderColor' => '#1c1c1c',
              'data' => $franchiseNberStructureActive,
          ],
          [
              'barThickness' => 44,
              'barPercentage' => 1,
              'label' => 'Structure inactive',
              'backgroundColor' => '#1c1c1c',
              'borderColor' => '#1c1c1c',
              'data' => $franchiseNberStructureInactive,
              ]
          ],
    ]);

    $chart->setOptions([
      'plugins' => [
          'legend' => [
              'position' => 'bottom',
              "display" => true,
              'labels' => [
                  'padding' => 35,
                  'color' => '#6c757d ',
                  'font' => [
                      'size' => 14,
                  ],
                  ]
              ],
          ],
          'scales' => [
              'x' => [
                  'stacked' => true,
                  'ticks' => [
                      'color' => '#6c757d ',
                      'font' => [
                          'size' => 14,
                          ]
                      ],
                  ],
                  'y' => [
                      'grid' => [
                          'drawBorder' => false,
                          'color' => '#6c757d33',
                      ],
                      'stacked' => true,
                      'ticks' => [
                          'stepSize' => 1,
                  'beginAtZero' => true,
                  'color' => '#6c757d ',
                  'font' => [
                      'size' => 14,
                      ]
                  ],
              ],
          ],
          'responsive' => true,
      ]);
    return $chart;
  }


  /**
   * Return chart-2 / Polar Area Chart of selected franchise (via input select) default first franchise
   *
   * @param array $franchises
   * @param integer $index
   * @return Chart
   */
  public function getChartDetailsStructures(Franchise $franchise): Chart
  {
    // init labels + datas
    $labels = $datas = [];
    // $this->franchises = $franchises;

    $structures = $franchise->getStructure();

    foreach ($structures as $structure) {
      $i = 0;
      // Set labels
      $labels[] = $structure->getName();
      // Set data > qty of permissions per structure
      foreach ($structure->getPermissions() as $permission) {
        $permission->getIsActive() ? $i++ : '';
      }
      $datas[] = $i;
    }
    // init chart
    $chart = $this->chartBuilder->createChart(Chart::TYPE_POLAR_AREA);
    $chart->setData([
        'labels' => $labels,
        'datasets' => [
            [
                'label' => 'Structure active',
                'backgroundColor' => ['#9be5647C', '#03ddcf7C', '#e46f627C'],
                'borderColor' => '#1c1c1c',
                'data' => $datas,
            ]
        ],
    ]);

    $chart->setOptions([
      'elements' => [
          'arc' => [
              // 'circular' => false,
              'borderWidth' => 0,
          ]
      ],
      'responsive' => true,
      'plugins' => [
          'datalabels' => [
              'display' => true,
              'align' => 'bottom',
              'backgroundColor' => '#ccc',
              'color' => 'red',
              'borderRadius' => 3,
              'font' => [
                'size' => 18,
              ]
          ],
          'legend' => [
              'position' => 'bottom',
              'align' => 'center',
              'labels' => [
                  'padding' => 35,
                  'color' => '#6c757d',
                  'font' => [
                      'size' => 14,
                  ],
                  'padding' => 10
              ]
          ]
      ],
      'gridLines' => [
          'display' => true,
          'drawBorder' => false,
          'color' => '#6c757d33',
      ],
    ]);
    return $chart;
  }

  /**
   * Return chart-3 / Radar Chart of all features used
   *
   * @param array $franchises
   * @param integer $index
   * @return Chart
   */
  public function getChartDetailsFeatures(): Chart
  {
    // init labels + datas
    $labels = $datas = [];
    // $this->franchises = $franchises;

    $features = $this->featureRepository->findBy([], ['name' => 'ASC']);

    $featuresName = $featuresId = [];
    foreach ($features as $feature) {
        $featuresName[] = $feature->getName();
        $featuresId[] = $feature->getId();
    }
    // dump($featuresName);
    $labels = $featuresName;

    $allPermissionsActive = $this->permissionRepository->findBy(['isActive' => 'true']);

    // $permissions = $permissionRepository->get;

    // Get datas :
    // Qty total af active features  (cumulative subscriptions from franchises and structures)
    // + Qty total of global active features subscribe by all franchises
    // + Qty total of active features subscribe by all structures
    $qtyFeaturesActives = $qtyActiveFeaturesFranchises = $qtyActiveFeaturesStructures = [];

    foreach ($featuresId as $featureId) {
        $i = $j = 0;
        foreach ($allPermissionsActive as $permissionActive) {
            $idFeatureOfActivePermission = $permissionActive->getFeature()->getId();
            if ($featureId == $idFeatureOfActivePermission) {
                $i++;
                if ($permissionActive->getIsGlobal()) {
                    $j++;
                }
            }
        }
        $qtyTotalActiveFeatures[] = $i;
        $qtyActiveFeaturesFranchises[] = $j;
        $qtyActiveFeaturesStructures[] = $i - $j;
    }
    // dump($qtyTotalActiveFeatures);
    $datasTotal = $qtyTotalActiveFeatures;
    $datasFranchises = $qtyActiveFeaturesFranchises;
    $datasStructures = $qtyActiveFeaturesStructures;
    
    
    // // Qty total af active features
    // $qtyTotalActiveFeatures = [];
    // foreach ($featuresId as $featureId) {
    //     $i = 0;
    //     foreach ($allPermissionsActive as $permissionActive) {
    //         $idFeatureOfActivePermission = $permissionActive->getFeature()->getId();
    //         if ($featureId == $idFeatureOfActivePermission) {
    //             $i++;
    //         }
    //     }
    //     $qtyTotalActiveFeatures[] = $i;
    // }
    // dump($qtyTotalActiveFeatures);
    // $datas = $qtyFeaturesActives;

    // init chart
    $chart = $this->chartBuilder->createChart(Chart::TYPE_RADAR);
    $chart->setData([
        'labels' => $labels,
        'datasets' => [
            [
                'label' => 'Fonctionnalités souscrites cumulées',
                'backgroundColor' => ['#9be5647C'],
                'borderWidth' => 0,
                'data' => $datasTotal,
            ]
            ,
            [
                'label' => 'Fonctionnalités souscrites par les franchises',
                'backgroundColor' => ['#03ddcf7C'],
                'borderWidth' => 0,
                'data' => $datasFranchises,
            ],
            [
                'label' => 'Fonctionnalités souscrites par les structures',
                'backgroundColor' => ['#e46f627C'],
                'borderWidth' => 0,
                'data' => $datasStructures,
            ],
        ]
    ]);
    $chart->setOptions([
        // 'elements' => [
        //     'arc' => [
        //         // 'circular' => false,
        //     ]
        // ],
        'responsive' => true,
        'plugins' => [
            'datalabels' => [
                'display' => true,
                'align' => 'bottom',
                'backgroundColor' => '#ccc',
                'color' => 'red',
                'borderRadius' => 3,
                'font' => [
                  'size' => 18,
                ]
            ],
            'legend' => [
                'position' => 'bottom',
                
                'align' => 'center',
                'labels' => [
                    'padding' => 35,
                    'color' => '#6c757d',
                    'font' => [
                        'size' => 14,
                    ],
                    'padding' => 10
                ]
            ]
        ],
        'scales'=> [
            'r'=> [
                'pointLabels'=> [
                    'color' => '#6c757d',
                    'font'=> [
                        'size'=> 16,
                    ],
                ]
            ]
        ]
    ]);
    return $chart;
  }
}