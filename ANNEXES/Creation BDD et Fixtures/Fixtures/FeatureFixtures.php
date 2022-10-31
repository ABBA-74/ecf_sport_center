<?php

namespace App\DataFixtures;

use App\Entity\Feature;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\String\Slugger\SluggerInterface;

class FeatureFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(private SluggerInterface $sluggerInterface)
    {}

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        // creating 16 features
        $options = [
            'aide administratif',
            'aide comptabilité',
            'aide juridique',
            'aide logistique',
            'aide marketing',
            'audits postes',
            'audits processus',
            'centrales d\'achat',
            'coach collectif',
            'coach personnel',
            'strategie digitale',
            'business plan',
            'gestion planning',
            'newsletters',
            'plans formations',
            'séminaires'
        ];
        for ($i=1; $i <= 16 ; $i++) { 
            $feature = new Feature();

            $intervalDate = $faker->dateTimeBetween('-5 month', '-3 month');
            // $feature->setName($faker->unique()->word(2))
            $feature->setName($options[$i-1])
                    ->setDescription($faker->sentence(25))
                    ->setSlug($this->sluggerInterface->slug($feature->getName())->lower())
                    ->setIsActive(true)
                    ->setAdminCommercial($this->getReference('adminCommercial_' . $faker->randomElement([1,2])))
                    ->setCreatedAt(\DateTimeImmutable::createFromMutable($intervalDate));
            $this->addReference('feature_' . $i, $feature);
            $manager->persist($feature);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class
        ];
    }
}
