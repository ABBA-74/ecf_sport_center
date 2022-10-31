# SPORT CENTER

---

Le projet Sport Center est un projet d'évaluation qui a été réalisé en cours de formation
Cette application web est une application de gestion de fonctionnalités pour des franchises et des structures
de salle de sport par la maison mère "Sport Center"

---

## DEPLOIEMENT EN LOCAL

### 1- Pré-requis

- PHP 8.1
- Composer
- Symfony CLI
- WAMP / MAMP / LAMP ou XAMPP
- nodejs + npm
- MailHog (permet d'installer un serveur d'email en local) https://github.com/mailhog/MailHog

### 2 - Vérification des pré-requis avec la commande suivante (symfony CLI) :

Symfony CLI intègre un outil permettant de vérifier que votre ordinateur répond à toutes
les exigences nécessaires pour exécuter une application Symfony correctement.

Executez la commande ci-dessous, pour procéder à cette vérification:

```bash
symfony check:requirements
```

### 3 - Cloner le projet

Avec la commande:

```bash
git clone xxxx
```

Si vous utilisez VS Code, ouvrir le projet cloné dans votre IDE grâce aux commandes :

```bash
cd ecf_sport_center/
code .
```

### 4 - Configurer vos variables d'environnements dans le fichier .env / .env.local

Definissez vos variables:

- APP_ENV (dev)
- APP_SECRET
- DATABASE_URL
- MAILER_DSN

Concernant la variable DATABASE_URL:

Paramètrez les informations d'identification de la base de donnée en remplacant les champs:

| Name          | Description                         |
| :------------ | :---------------------------------- |
| `DB_USER`     | Nom utilisateur de la BDD           |
| `DB_PASSWORD` | Mot de passe de connection à la BDD |
| `PORT`        | Port de la BDD                      |
| `DB_NAME`     | Nom de votre base de donnée         |
| `VERSION_BDD` | Version de votre BDD                |

```bash
DATABASE_URL="mysql://DB_USER:DB_PASSWORD@127.0.0.1:PORT/DB_NAME?serverVersion=VERSION_BDD;
```

### 5 - Paramètrage du mailer

Pour votre environnement en dev, si vous utiliser Mailhog, la variable MAILER_DSN sera:

```bash
MAILER_DSN=smtp://localhost:1025
```

En local, pour accéder à la boite mail de Mailhog:

1.  Lancer l'application MailHog
1.  Puis ouvrir la page : http://localhost:8025

### 6 - Créer la base de donnée

Vous pouvez la créer manuellement dans votre SGBDR ou utilisez la commande fourni par Symfony :

```bash
symfony console doctrine:database:create
```

ou

```bash
php bin/console doctrine:database:create
```

### 7 - Executer les migrations du projet

La commande ci-dessous, permettra d'executer toutes les fichiers de migration du projet:

```bash
symfony console doctrine:migrations:migrate
```

ou

```bash
php bin/console doctrine:migrations:migrate
```

### 8 - Ajouter des données de tests dans la BDD

Vous avez la possibité de charger des données fictives gràce aux "fixtures" (en mode dev) avec la commande :

```bash
symfony console doctrine:fixtures:load
```

> **NOTE :** Le chargement de ces données fictives ecrasera les données existantes de la BDD

Rafraichissez la page (F5/ Alt F5) afin d'avoir une réactualisation de ces nouvelles données.

### 9 - Lancer l'environnement de développement

Activez Mysql sur votre interface Lamp, Wamp ou Xamp

Pour pouvoir installer les dépendances du projet et lancer le serveur Web local de Symfony,
vous pourrez utiliser les commandes :

```bash
composer install
npm install
npm run build
symfony serve
```

Ouvrez votre navigateur et accédez à la page : http://localhost:8000
Si cela ne fonctionne pas, acceder à l'adresse fourni après la commande "symfony serve"
(il se peut que le port 8000 soit déjà réservé)

### 10 - Effectuer les tests unitaires

Vous avez la possibilité de lancer des tests unitaires pour vérifier l'intégrité des différentes entités de ce projet
avec la commande suivante :

```bash
php bin/phpunit --testdox
```

### 11 - Connection à l'application

Pour vous connecter à l'application:

> Si vous souhaitez rajouter un compte 'admin' depuis la BDD
> pensez à utiliser un mot de passe hashé et pré encoder à l'aide du site : https://www.bcrypt.fr

> Si vous souhaitez utiliser les comptes générés par les fixtures,
> récupérez les emails depuis la BDD et utlisez les mots de passe suivants :
>
> - Pour un compte admin: `admin`
> - Pour un compte responsable de franchise: `franchise`
> - Pour un compte manager de structure: `structure`

> **ATTENTION :** Ces derniers mots de passe ne sont pas assez sécurisés pour être utilisés en environnement de production

---

## DEPLOIEMENT EN PRODUCTION

### 1 - Redéfinir vos variables d'environnements dans le fichier .env

Pensez à modifier vos varables d'environnement:

- APP_ENV (prod)
- DATABASE_URL
- MAILER_DSN

### 2 - Paramètrage du mailer

Pensez à modifier la variable d'environnement MAILER_DSN
pour qu'il correspond à votre server mail que vous aurez choisi d'utiliser

---

### 3 - Pour la création de la BDD

Vous pourrez utiliser le fichier sql dans les ANNEXES

---

## ANNEXES

Vous trouverez les documents suivants dans le répertoire : Annexes

- schema_uml.pdf
- routes.pdf
