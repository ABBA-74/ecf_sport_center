<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Franchise;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class FranchiseFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(private SluggerInterface $sluggerInterface)
    {}

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $cities = ['Lyon', 'Caen', 'Nice', 'Dunkerque', 'Rouen', 'Lilles', 'Marseille', 'Annecy', 'Chambery'];
        
        for ($i=1; $i <= 6 ; $i++) { 
            $franchise = new Franchise();
            
            $franchise->setName('Sport Center ' . $faker->unique()->randomElement($cities))
                ->setDescription($faker->sentence(25))
                ->setAddress($faker->streetAddress())
                ->setPostCode($faker->regexify('\d[1-9]\d{3}'))
                ->setCity($faker->city())
                ->setPhone($faker->regexify('0[1-9]\d{8}'))
                ->setIsActive($faker->boolean())
                ->setSlug($this->sluggerInterface->slug($franchise->getName())->lower())
                ->setManager($this->getReference('managerFranchise_' . $i))
                ->setCommercial($this->getReference('commercial_' . $faker->numberBetween(1,10)))
                ->setCreatedAt($this->getReference('managerFranchise_' . $i)->getCreatedAt());
            $this->addReference('franchise_' . $i, $franchise);
            $manager->persist($franchise);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
