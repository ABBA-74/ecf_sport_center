<?php

namespace App\Tests;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class StructureUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $structure = new Structure();
        $commercial = new User();
        $manager = new User();
        $franchise = new Franchise();

        $structure->setName('test')
                  ->setDescription('test')
                  ->setAddress('test')
                  ->setPostCode('01222')
                  ->setCity('test')
                  ->setPhone('0101010101')
                  ->setIsActive(true)
                  ->setSlug('test')
                  ->setCommercial($commercial)
                  ->setManager($manager)
                  ->setFranchise($franchise);

        $this->assertTrue($structure->getName() === 'test');
        $this->assertTrue($structure->getDescription() === 'test');
        $this->assertTrue($structure->getAddress() === 'test');
        $this->assertTrue($structure->getPostCode() === '01222');
        $this->assertTrue($structure->getCity() === 'test');
        $this->assertTrue($structure->getPhone() === '0101010101');
        $this->assertTrue($structure->getIsActive() === true);
        $this->assertTrue($structure->getSlug() === 'test');
        $this->assertTrue($structure->getCommercial() === $commercial);
        $this->assertTrue($structure->getManager() === $manager);
        $this->assertTrue($structure->getFranchise() === $franchise);
    }

    public function testIsFalse(): void
    {
        $structure = new Structure();
        $commercial = new User();
        $manager = new User();
        $franchise = new Franchise();

        $structure->setName('test')
                  ->setDescription('test')
                  ->setAddress('test')
                  ->setPostCode('01222')
                  ->setCity('test')
                  ->setPhone('0101010101')
                  ->setIsActive(true)
                  ->setSlug('test')
                  ->setCommercial($commercial)
                  ->setManager($manager)
                  ->setFranchise($franchise);

        $this->assertFalse($structure->getName() === 'false');
        $this->assertFalse($structure->getDescription() === 'false');
        $this->assertFalse($structure->getAddress() === 'false');
        $this->assertFalse($structure->getPostCode() === '99999');
        $this->assertFalse($structure->getCity() === 'false');
        $this->assertFalse($structure->getPhone() === '0909090909');
        $this->assertFalse($structure->getIsActive() === false);
        $this->assertFalse($structure->getSlug() === 'false');
        $this->assertFalse($structure->getCommercial() === new User());
        $this->assertFalse($structure->getManager() === new User());
        $this->assertFalse($structure->getFranchise() === new Franchise());
    }

    public function testIsEmpty(): void
    {
        $structure = new Structure();

        $this->assertEmpty($structure->getName());
        $this->assertEmpty($structure->getDescription());
        $this->assertEmpty($structure->getAddress());
        $this->assertEmpty($structure->getPostCode());
        $this->assertEmpty($structure->getCity());
        $this->assertEmpty($structure->getPhone());
        $this->assertEmpty($structure->getIsActive());
        $this->assertEmpty($structure->getSlug());
        $this->assertEmpty($structure->getId());
        $this->assertEmpty($structure->getCommercial());
        $this->assertEmpty($structure->getManager());
        $this->assertEmpty($structure->getFranchise());
    }

    public function testAddGetRemovePermission(): void
    {
        $structure = new Structure();
        $permission = new Permission();

        $this->assertEmpty($structure->getPermissions());

        $structure->addPermission($permission);
        $this->assertContains($permission, $structure->getPermissions());

        $structure->removePermission($permission);
        $this->assertEmpty($structure->getPermissions());
    }
}
