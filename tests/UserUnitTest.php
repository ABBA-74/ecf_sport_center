<?php

namespace App\Tests;

use App\Entity\Feature;
use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $user = new User();

        $user->setFirstname('prenom')
            ->setLastname('nom')
            ->setPhone('0101010101')
            ->setIsActive(true)
            ->setIsBlocked(true)
            ->setEmail('test@test.com')
            ->setPassword('password')
            ->setRoles(['ROLE_TEST'])
            ->setSlug('test');

        $this->assertTrue($user->getFirstname() === 'prenom');
        $this->assertTrue($user->getLastname() === 'nom');
        $this->assertTrue($user->getPhone() === '0101010101');
        $this->assertTrue($user->getIsActive() === true);
        $this->assertTrue($user->getIsBlocked() === true);
        $this->assertTrue($user->getEmail() === 'test@test.com');
        $this->assertTrue($user->getPassword() === 'password');
        $this->assertTrue($user->getRoles() === ['ROLE_TEST', 'ROLE_USER']);
        $this->assertTrue($user->getSlug() === 'test');
    }

    public function testIsFalse(): void
    {
        $user = new User();

        $user->setFirstname('prenom')
             ->setLastname('nom')
             ->setPhone('0101010101')
             ->setIsActive(true)
             ->setIsBlocked(true)
             ->setEmail('test@test.com')
             ->setPassword('password')
             ->setRoles(['ROLE_TEST'])
             ->setSlug('test');

        $this->assertFalse($user->getFirstname() === 'false');
        $this->assertFalse($user->getLastname() === 'false');
        $this->assertFalse($user->getPhone() === '0909090909');
        $this->assertFalse($user->getIsActive() === false);
        $this->assertFalse($user->getIsBlocked() === false);
        $this->assertFalse($user->getEmail() === 'false@test.com');
        $this->assertFalse($user->getPassword() === 'false');
        $this->assertFalse($user->getRoles() === ['ROLE_FALSE']);
        $this->assertFalse($user->getSlug() === 'false');
    }

    public function testIsEmpty(): void
    {
        $user = new User();

        $this->assertEmpty($user->getFirstname());
        $this->assertEmpty($user->getLastname());
        $this->assertEmpty($user->getPhone());
        $this->assertEmpty($user->getIsActive());
        $this->assertEmpty($user->getIsBlocked());
        $this->assertEmpty($user->getEmail());
        $this->assertEmpty($user->getPassword());
        $this->assertEmpty($user->getSlug());
        $this->assertEmpty($user->getId());
    }

    public function testAddGetRemovePermission(): void
    {
        $user = new User();
        $permission = new Permission();

        $this->assertEmpty($user->getPermissions());

        $user->addPermission($permission);
        $this->assertContains($permission, $user->getPermissions());

        $user->removePermission($permission);
        $this->assertEmpty($user->getPermissions());
    }

    public function testAddGetRemoveFranchise(): void
    {
        $user = new User();
        $franchise = new Franchise();

        $this->assertEmpty($user->getFranchises());

        $user->addFranchise($franchise);
        $this->assertContains($franchise, $user->getFranchises());

        $user->removeFranchise($franchise);
        $this->assertEmpty($user->getFranchises());
    }

    public function testAddGetRemoveStructure(): void
    {
        $user = new User();
        $structure = new Structure();

        $this->assertEmpty($user->getStructures());

        $user->addStructure($structure);
        $this->assertContains($structure, $user->getStructures());

        $user->removeStructure($structure);
        $this->assertEmpty($user->getStructures());
    }

    public function testAddGetRemoveFeature(): void
    {
        $user = new User();
        $feature = new Feature();

        $this->assertEmpty($user->getFeatures());

        $user->addFeature($feature);
        $this->assertContains($feature, $user->getFeatures());

        $user->removeFeature($feature);
        $this->assertEmpty($user->getFeatures());
    }
}
