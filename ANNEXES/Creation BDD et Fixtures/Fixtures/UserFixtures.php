<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    // added UserPasswordHasherInterface for hashing password during the process
    // of creation fixture users
    // added SluggerInterface for formatting email
    public function __construct(
        private UserPasswordHasherInterface $userPasswordHasherInterface,
        private SluggerInterface $sluggerInterface,
    ){}

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        for ($i=1; $i <= 34 ; $i++) {
            $user = new User();
            $user->setLastname($faker->unique()->lastname())
            ->setFirstname($faker->unique()->firstName())
            ->setPhone($faker->regexify('06[0-9]{8}'))
            ->setIsBlocked(false)
            ->setSlug($this->sluggerInterface->slug($user->getFirstname())->lower() . 
            '-' . $this->sluggerInterface->slug($user->getLastname())->lower())
            ->setEmail(
                sprintf('%s.%s@%s',
                $this->sluggerInterface->slug($user->getFirstname())->lower(),
                $this->sluggerInterface->slug($user->getLastname())->lower(),
                $faker->safeEmailDomain()
                )
            );
            
            // Creating 2 admins which are part of the commercials
            // with role: ROLE_ADMIN for the first 2 commercial users
            if ($i <= 2) {
                $intervalDate = $faker->dateTimeBetween('-6 month', '-5 month');
                $user->setPassword($this->userPasswordHasherInterface
                ->hashPassword($user, 'admin'))
                ->setRoles(['ROLE_ADMIN'])
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($intervalDate));
                $this->addReference('adminCommercial_' . $i, $user);
            }

            // Creating 8 commercials with role :ROLE_COMMERCIAL
            if ($i > 2 && $i <= 10) {
                $intervalDate = $faker->dateTimeBetween('-5 month', '-3 month');
                $user->setPassword($this->userPasswordHasherInterface
                ->hashPassword($user, 'commercial'))
                ->setRoles(['ROLE_COMMERCIAL'])
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($intervalDate));
            }
            
            // add reference for the first 10 users (commercial)
            // used to share commercial users with other fixture files
            if ($i <= 10) {
                $user->setIsActive(true);
                $this->addReference('commercial_' . $i, $user);
            }
            
            // Creating 6 franchise managers with status ROLE_MANAGER_FRANCHISE 
            if ($i > 10 && $i <= 16)  {
                $intervalDate = $faker->dateTimeBetween('-3 month', '-3 day');
                $user->setPassword($this->userPasswordHasherInterface
                ->hashPassword($user, 'franchise'))
                ->setIsActive($faker->boolean())
                ->setRoles(['ROLE_MANAGER_FRANCHISE'])
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($intervalDate));
                // add reference franchise managers
                $this->addReference('managerFranchise_' . $i - 10, $user);
            }
            
            // Creating 18 structure managers with status ROLE_MANAGER_STRUCTURE 
            // ( => 3 structure managers per franchise)
            if ($i > 16 && $i <= 34)  {
                $intervalDate = $faker->dateTimeBetween('-3 month', '-3 day');
                $user->setPassword($this->userPasswordHasherInterface
                ->hashPassword($user, 'structure'))
                ->setIsActive($faker->boolean())
                ->setRoles(['ROLE_MANAGER_STRUCTURE'])
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($intervalDate));
                // add reference structure managers
                $this->addReference('managerStructure_' . $i - 16, $user);
            }
            $manager->persist($user);
        }    
        $manager->flush();
    }
}