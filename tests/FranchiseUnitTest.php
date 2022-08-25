<?php

namespace App\Tests;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class FranchiseUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $franchise = new Franchise();
        $commercial = new User();
        $manager = new User();

        $franchise->setName('test')
                  ->setDescription('test')
                  ->setAddress('test')
                  ->setPostCode('01222')
                  ->setCity('test')
                  ->setPhone('0101010101')
                  ->setIsActive(true)
                  ->setSlug('test')
                  ->setCommercial($commercial)
                  ->setManager($manager);

        $this->assertTrue($franchise->getName() === 'test');
        $this->assertTrue($franchise->getDescription() === 'test');
        $this->assertTrue($franchise->getAddress() === 'test');
        $this->assertTrue($franchise->getPostCode() === '01222');
        $this->assertTrue($franchise->getCity() === 'test');
        $this->assertTrue($franchise->getPhone() === '0101010101');
        $this->assertTrue($franchise->getIsActive() === true);
        $this->assertTrue($franchise->getSlug() === 'test');
        $this->assertTrue($franchise->getCommercial() === $commercial);
        $this->assertTrue($franchise->getManager() === $manager);
    }

    public function testIsFalse(): void
    {
        $franchise = new Franchise();
        $commercial = new User();
        $manager = new User();

        $franchise->setName('test')
                  ->setDescription('test')
                  ->setAddress('test')
                  ->setPostCode('01222')
                  ->setCity('test')
                  ->setPhone('0101010101')
                  ->setIsActive(true)
                  ->setSlug('test')
                  ->setCommercial($commercial)
                  ->setManager($manager);

        $this->assertFalse($franchise->getName() === 'false');
        $this->assertFalse($franchise->getDescription() === 'false');
        $this->assertFalse($franchise->getAddress() === 'false');
        $this->assertFalse($franchise->getPostCode() === '99999');
        $this->assertFalse($franchise->getCity() === 'false');
        $this->assertFalse($franchise->getPhone() === '0909090909');
        $this->assertFalse($franchise->getIsActive() === false);
        $this->assertFalse($franchise->getSlug() === 'false');
        $this->assertFalse($franchise->getCommercial() === new User());
        $this->assertFalse($franchise->getManager() === new User());
    }

    public function testIsEmpty(): void
    {
        $franchise = new Franchise();

        $this->assertEmpty($franchise->getName());
        $this->assertEmpty($franchise->getDescription());
        $this->assertEmpty($franchise->getAddress());
        $this->assertEmpty($franchise->getPostCode());
        $this->assertEmpty($franchise->getCity());
        $this->assertEmpty($franchise->getPhone());
        $this->assertEmpty($franchise->getIsActive());
        $this->assertEmpty($franchise->getSlug());
        $this->assertEmpty($franchise->getId());
        $this->assertEmpty($franchise->getCommercial());
        $this->assertEmpty($franchise->getManager());
    }

    public function testAddGetRemoveStructure(): void
    {
        $franchise = new Franchise();
        $structure = new Structure();

        $this->assertEmpty($franchise->getPermissions());

        $franchise->addStructure($structure);
        $this->assertContains($structure, $franchise->getStructure());

        $franchise->removeStructure($structure);
        $this->assertEmpty($franchise->getStructure());
    }

    public function testAddGetRemovePermission(): void
    {
        $franchise = new Franchise();
        $permission = new Permission();

        $this->assertEmpty($franchise->getPermissions());

        $franchise->addPermission($permission);
        $this->assertContains($permission, $franchise->getPermissions());

        $franchise->removePermission($permission);
        $this->assertEmpty($franchise->getPermissions());
    }
}
