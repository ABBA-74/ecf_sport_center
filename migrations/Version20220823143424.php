<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220823143424 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE feature (id INT AUTO_INCREMENT NOT NULL, admin_commercial_id INT DEFAULT NULL, name VARCHAR(200) NOT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_1FD77566A696D87B (admin_commercial_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE franchise (id INT AUTO_INCREMENT NOT NULL, commercial_id INT NOT NULL, manager_id INT NOT NULL, name VARCHAR(150) NOT NULL, description LONGTEXT DEFAULT NULL, address VARCHAR(255) NOT NULL, post_code VARCHAR(5) NOT NULL, city VARCHAR(150) NOT NULL, phone VARCHAR(10) DEFAULT NULL, is_active TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_66F6CE2A7854071C (commercial_id), UNIQUE INDEX UNIQ_66F6CE2A783E3463 (manager_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE permission (id INT AUTO_INCREMENT NOT NULL, feature_id INT NOT NULL, franchise_id INT NOT NULL, structure_id INT NOT NULL, is_active TINYINT(1) NOT NULL, is_global TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E04992AA60E4B879 (feature_id), INDEX IDX_E04992AA523CAB89 (franchise_id), INDEX IDX_E04992AA2534008B (structure_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE permission_user (permission_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_DC5D4DE9FED90CCA (permission_id), INDEX IDX_DC5D4DE9A76ED395 (user_id), PRIMARY KEY(permission_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE structure (id INT AUTO_INCREMENT NOT NULL, commercial_id INT NOT NULL, manager_id INT NOT NULL, franchise_id INT DEFAULT NULL, name VARCHAR(150) NOT NULL, description LONGTEXT DEFAULT NULL, address VARCHAR(255) NOT NULL, post_code VARCHAR(5) NOT NULL, city VARCHAR(150) NOT NULL, phone VARCHAR(10) DEFAULT NULL, is_active TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_6F0137EA7854071C (commercial_id), UNIQUE INDEX UNIQ_6F0137EA783E3463 (manager_id), INDEX IDX_6F0137EA523CAB89 (franchise_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(150) NOT NULL, is_active TINYINT(1) DEFAULT NULL, phone VARCHAR(10) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE feature ADD CONSTRAINT FK_1FD77566A696D87B FOREIGN KEY (admin_commercial_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE franchise ADD CONSTRAINT FK_66F6CE2A7854071C FOREIGN KEY (commercial_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE franchise ADD CONSTRAINT FK_66F6CE2A783E3463 FOREIGN KEY (manager_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE permission ADD CONSTRAINT FK_E04992AA60E4B879 FOREIGN KEY (feature_id) REFERENCES feature (id)');
        $this->addSql('ALTER TABLE permission ADD CONSTRAINT FK_E04992AA523CAB89 FOREIGN KEY (franchise_id) REFERENCES franchise (id)');
        $this->addSql('ALTER TABLE permission ADD CONSTRAINT FK_E04992AA2534008B FOREIGN KEY (structure_id) REFERENCES structure (id)');
        $this->addSql('ALTER TABLE permission_user ADD CONSTRAINT FK_DC5D4DE9FED90CCA FOREIGN KEY (permission_id) REFERENCES permission (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE permission_user ADD CONSTRAINT FK_DC5D4DE9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE structure ADD CONSTRAINT FK_6F0137EA7854071C FOREIGN KEY (commercial_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE structure ADD CONSTRAINT FK_6F0137EA783E3463 FOREIGN KEY (manager_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE structure ADD CONSTRAINT FK_6F0137EA523CAB89 FOREIGN KEY (franchise_id) REFERENCES franchise (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE feature DROP FOREIGN KEY FK_1FD77566A696D87B');
        $this->addSql('ALTER TABLE franchise DROP FOREIGN KEY FK_66F6CE2A7854071C');
        $this->addSql('ALTER TABLE franchise DROP FOREIGN KEY FK_66F6CE2A783E3463');
        $this->addSql('ALTER TABLE permission DROP FOREIGN KEY FK_E04992AA60E4B879');
        $this->addSql('ALTER TABLE permission DROP FOREIGN KEY FK_E04992AA523CAB89');
        $this->addSql('ALTER TABLE permission DROP FOREIGN KEY FK_E04992AA2534008B');
        $this->addSql('ALTER TABLE permission_user DROP FOREIGN KEY FK_DC5D4DE9FED90CCA');
        $this->addSql('ALTER TABLE permission_user DROP FOREIGN KEY FK_DC5D4DE9A76ED395');
        $this->addSql('ALTER TABLE structure DROP FOREIGN KEY FK_6F0137EA7854071C');
        $this->addSql('ALTER TABLE structure DROP FOREIGN KEY FK_6F0137EA783E3463');
        $this->addSql('ALTER TABLE structure DROP FOREIGN KEY FK_6F0137EA523CAB89');
        $this->addSql('DROP TABLE feature');
        $this->addSql('DROP TABLE franchise');
        $this->addSql('DROP TABLE permission');
        $this->addSql('DROP TABLE permission_user');
        $this->addSql('DROP TABLE structure');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
