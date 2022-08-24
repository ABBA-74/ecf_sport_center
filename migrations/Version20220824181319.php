<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220824181319 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE feature ADD slug VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE franchise ADD slug VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE structure ADD slug VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD slug VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE feature DROP slug');
        $this->addSql('ALTER TABLE franchise DROP slug');
        $this->addSql('ALTER TABLE structure DROP slug');
        $this->addSql('ALTER TABLE user DROP slug');
    }
}
