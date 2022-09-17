<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function add(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);

        $this->add($user, true);
    }

//    /**
//     * @return User[] Returns an array of User objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?User
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    
    public function findByRole($role)//par exemple $role ="ROLE_GESTIONNAIRE"
    {
        $qb = $this->_em->createQueryBuilder();
        $qb->select('u')
        ->from($this->_entityName, 'u')
        ->where('u.roles LIKE :roles')
        // ->andwhere('u.enabled = :enabled')
        ->setParameter('roles', '%"'.$role.'"%');
        // ->setParameter('enabled', true)
        
        return $qb->getQuery()->getResult();
    }

    /**
    * Return number of commercial
    *
    * @return integer
    */
    // public function getTotalCommercials($roleUser = null, $search = null): int
    public function getTotalCommercials($search = null): int
    {
        $qb = $this->createQueryBuilder('u')
            ->select('COUNT(u)');
        
        // if($roleUser != null){
            // $qb->where('u.roles LIKE :roles')
            // ->setParameter('roles', '%"'.$roleUser.'"%'); 
        // }

        $qb->where('u.roles LIKE :roles')
            ->setParameter('roles', '%"' . 'ROLE_COMMERCIAL' . '"%');


        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('u.firstname', ':search'))
            ->orWhere($qb->expr()->like('u.lastname', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        }
        return $qb->getQuery()->getSingleScalarResult();
    }


    /**
    * Return all franchises per page
    *
    * @param int $currentPage
    * @param int $limit
    * @return array
    */
    // public function getPaginatedFranchises($currentPage, $limit, $isActiveFranchise = null, $search = null): array
    public function getPaginatedCommercials($currentPage, $limit, $search = null): array
    {
        $qb = $this->createQueryBuilder('u');

        // if($roleUser != null){
        //     $qb->where('u.roles LIKE :roles')
        //     ->setParameter('roles', '%"'.$roleUser.'"%');
        // };

        $qb->where('u.roles LIKE :roles')
            ->setParameter('roles', '%"' . 'ROLE_COMMERCIAL' . '"%');

        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('u.firstname', ':search'))
            ->orWhere($qb->expr()->like('u.lastname', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        };

        $qb->orderBy('u.id')
        // ->orderBy('a.created_at')
            ->setFirstResult(($currentPage * $limit) - $limit)
            ->setMaxResults($limit)
        ;
        return $qb->getQuery()->getResult();
    }
}
