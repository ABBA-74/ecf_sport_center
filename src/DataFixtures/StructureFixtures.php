<?php

namespace App\DataFixtures;

use App\Entity\Structure;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class StructureFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        
        $nameFranchise = '';
        $indexRefFranchise = 1;
        $indexNameStructure = 1;
        for ($i=1; $i < 10 ; $i++) { 
            $structure = new Structure();
            
            if(($i-1) % 3 === 0) {
                $franchise = $this->getReference('franchise_' . $indexRefFranchise);
                $nameFranchise = $franchise->getName();
                $indexRefFranchise++;
                $indexNameStructure = 1;
            } else {
                $indexNameStructure++;
            }

            $structure->setName($nameFranchise . ' - ' . $indexNameStructure)
            ->setDescription($faker->sentence(25))
            ->setAddress($faker->streetAddress())
            ->setPostCode($faker->regexify('\d[1-9]\d{3}'))
            ->setCity($faker->city())
            ->setPhone($faker->regexify('0[1-9]\d{8}'))
            ->setIsActive($faker->boolean())
            ->setManager($this->getReference('managerStructure_' . $i))
            ->setCommercial($this->getReference('commercial_' . $faker->numberBetween(1,10)))
            ->setFranchise($franchise)
            ->setCreatedAt($this->getReference('managerStructure_' . $i)->getCreatedAt());

            $this->addReference('structure_' . $i, $structure);
            $manager->persist($structure);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
            FranchiseFixtures::class
        ];
    }
}
