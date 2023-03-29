<?php

namespace App\Tests;

use App\Entity\Feature;
use App\Entity\Permission;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class FeatureUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $feature = new Feature();
        $user = new User();

        $feature->setName('test')
            ->setDescription('test')
            ->setSlug('test')
            ->setAdminCommercial($user);

        $this->assertTrue($feature->getName() === 'test');
        $this->assertTrue($feature->getDescription() === 'test');
        $this->assertTrue($feature->getSlug() === 'test');
        $this->assertTrue($feature->getAdminCommercial() === $user);
    }

    public function testIsFalse(): void
    {
        $feature = new Feature();
        $user = new User();

        $feature->setName('test')
                ->setDescription('test')
                ->setSlug('test')
                ->setAdminCommercial($user);

        $this->assertFalse($feature->getName() === 'false');
        $this->assertFalse($feature->getDescription() === 'false');
        $this->assertFalse($feature->getSlug() === 'false');
        $this->assertFalse($feature->getAdminCommercial() === new User());
    }

    public function testIsEmpty(): void
    {
        $feature = new Feature();

        $this->assertEmpty($feature->getName());
        $this->assertEmpty($feature->getDescription());
        $this->assertEmpty($feature->getSlug());
        $this->assertEmpty($feature->getId());
        $this->assertEmpty($feature->getAdminCommercial());
    }

    public function testAddGetRemovePermission(): void
    {
        $feature = new Feature();
        $permission = new Permission();

        $this->assertEmpty($feature->getPermissions());

        $feature->addPermission($permission);
        $this->assertContains($permission, $feature->getPermissions());

        $feature->removePermission($permission);
        $this->assertEmpty($feature->getPermissions());
    }

}
