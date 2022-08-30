<?php

namespace App\DataFixtures;

use App\Entity\Permission;
use App\Entity\Structure;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class PermissionFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        
        // Creating 16 permissions for each franchise (x3)
        for ($i=1; $i <= 3; $i++) { 
            $franchise = $this->getReference('franchise_' . $i);
            
            // Adding 16 permissions per franchise
            for ($j=1; $j <= 16 ; $j++) { 
                $permission = new Permission();
                
                $randNumCommercial = $faker->numberBetween(1,10);
                
                $permission->setCreatedAt($franchise->getCreatedAt())
                ->setIsActive($faker->boolean())
                ->setIsGlobal(true)
                ->setFranchise($franchise)
                ->setStructure(null)
                ->setFeature($this->getReference('feature_' . $j))
                ->addCommercial($this->getReference('commercial_'. $randNumCommercial));
                
                $manager->persist($permission);
            }
        }
        $manager->flush();

        // Creating 16 permissions for each structure (x9)
        $indexRefFranchise = 1;
        for ($i=1; $i <= 9 ; $i++) { 
            $structure = new Structure();

            if ($i % 3 === 0) {
                $franchise = $this->getReference('franchise_' . $indexRefFranchise);
                $indexRefFranchise++;
            }

            $structure = $this->getReference('structure_' . $i);

            for ($j=1; $j <= 16; $j++) { 
                $permission = new Permission();

                $randNumCommercial = $faker->numberBetween(1,10);

                $permission->setCreatedAt($structure->getCreatedAt())
                           ->setIsActive($faker->boolean())
                           ->setIsGlobal(false)
                           ->setFranchise($franchise)
                           ->setStructure($structure)
                           ->setFeature($this->getReference('feature_' . $j))
                           ->addCommercial($this->getReference('commercial_' . $randNumCommercial));

                $manager->persist($permission);
            }
        }
        $manager->flush();
    }
    
    public function getDependencies()
    {
        return [
            UserFixtures::class,
            FranchiseFixtures::class,
            StructureFixtures::class,
            FeatureFixtures::class
        ];
    }
}
