<?php

namespace App\Tests;

use App\Entity\Feature;
use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class PermissionUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $permission = new Permission();
        $feature = new Feature();
        $franchise = new Franchise();
        $structure = new Structure();

        $permission->setIsActive(true)
                   ->setIsGlobal(true)
                   ->setFeature($feature)
                   ->setFranchise($franchise)
                   ->setStructure($structure);

        $this->assertTrue($permission->getIsActive() === true);
        $this->assertTrue($permission->getIsGlobal() === true);
        $this->assertTrue($permission->getFeature() === $feature);
        $this->assertTrue($permission->getFranchise() === $franchise);
        $this->assertTrue($permission->getStructure() === $structure);
    }

    public function testIsFalse(): void
    {
        $permission = new Permission();
        $feature = new Feature();
        $franchise = new Franchise();
        $structure = new Structure();

        $permission->setIsActive(true)
                   ->setIsGlobal(true)
                   ->setFeature($feature)
                   ->setFranchise($franchise)
                   ->setStructure($structure);

        $this->assertFalse($permission->getIsActive() === false);
        $this->assertFalse($permission->getIsGlobal() === false);
        $this->assertFalse($permission->getFeature() === new Feature());
        $this->assertFalse($permission->getFranchise() === new Franchise());
        $this->assertFalse($permission->getStructure() === new Structure());
    }

    public function testIsEmpty(): void
    {
        $permission = new Permission();

        $this->assertEmpty($permission->getIsActive());
        $this->assertEmpty($permission->getIsGlobal());
        $this->assertEmpty($permission->getFeature());
        $this->assertEmpty($permission->getFranchise());
        $this->assertEmpty($permission->getStructure());
    }

    public function testAddGetRemoveCommercial(): void
    {
        $permission = new Permission();
        $commercial = new User();

        $this->assertEmpty($permission->getCommercial());

        $permission->addCommercial($commercial);
        $this->assertContains($commercial, $permission->getCommercial());

        $permission->removeCommercial($commercial);
        $this->assertEmpty($permission->getCommercial());
    }
}
