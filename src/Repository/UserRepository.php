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


    /**
     * Return all users with role specified in arg
     *
     * @param [type] $role
     * @return User[]
     */
    public function findByRole($role): array
    {
        $qb = $this->_em->createQueryBuilder();
        $qb->select('u')
        ->from($this->_entityName, 'u')
        ->where('u.roles IN (:roles)')
        ->setParameter('roles', $role);
        
        return $qb->getQuery()->getResult();
    }

    /**
    * Return total of commercials filtered by search input and their status
    *
    * @return integer
    */
    public function getTotalUsers($isActiveUser = null, $search = null, $userRole = null): int
    {
        $qb = $this->createQueryBuilder('u')
            ->select('COUNT(u)');
        

        if($userRole != null){
            $qb->where('u.roles LIKE :role')
            ->setParameter('role', '%"'.$userRole.'"%');
        };

        if($isActiveUser != null){
            $qb->andwhere('u.isBlocked = 0');
        }

        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('u.firstname', ':search'))
            ->orWhere($qb->expr()->like('u.lastname', ':search'))
            ->orWhere($qb->expr()->like('u.phone', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        }
        return $qb->getQuery()->getSingleScalarResult();
    }


    /**
    * Return all commercials per page
    *
    * @param int $currentPage
    * @param int $limit
    * @return User[]
    */
    public function getPaginatedUsers($currentPage, $limit, $isActiveUser = null, $search = null, $userRole = null): array
    {
        $qb = $this->createQueryBuilder('u');

        if($userRole != null){
            $qb->where('u.roles LIKE :role')
            ->setParameter('role', '%"'.$userRole.'"%');
        };
        if($isActiveUser != null){
            $qb->andwhere('u.isBlocked = 0');
        } 

        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('u.firstname', ':search'))
            ->orWhere($qb->expr()->like('u.email', ':search'))
            ->orWhere($qb->expr()->like('u.lastname', ':search'))
            ->orWhere($qb->expr()->like('u.phone', ':search'))
            ->orWhere($qb->expr()->like(
                $qb->expr()->concat('u.firstname', $qb->expr()->concat($qb->expr()->literal(' '), 'u.lastname')),
                $qb->expr()->literal($search.'%')
            ))
            ->orWhere($qb->expr()->like(
                $qb->expr()->concat('u.lastname', $qb->expr()->concat($qb->expr()->literal(' '), 'u.firstname')),
                $qb->expr()->literal($search.'%')
            ))
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
