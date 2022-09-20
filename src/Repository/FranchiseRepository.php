<?php

namespace App\Repository;

use App\Entity\Franchise;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Franchise>
 *
 * @method Franchise|null find($id, $lockMode = null, $lockVersion = null)
 * @method Franchise|null findOneBy(array $criteria, array $orderBy = null)
 * @method Franchise[]    findAll()
 * @method Franchise[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FranchiseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Franchise::class);
    }

    public function add(Franchise $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Franchise $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Franchise[] Returns an array of Franchise objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Franchise
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }+


    // /**
    //  * Return all active structures
    //  *
    //  * @return array
    //  */
    // public function findAllActiveStructure(): array
    // {
    //     return $this->createQueryBuilder('s')
    //        ->andWhere('s.isActive = 1')
    //        ->orderBy('s.id', 'ASC')
    //        ->getQuery()
    //        ->getResult()
    //    ;
    // }

    /**
     * Return total of franchises filtered by search input and their status
     *
     * @return integer
     */
    public function getTotalFranchises($isActiveFranchise = null, $search = null): int
    {
        $qb = $this->createQueryBuilder('f')
            ->select('COUNT(f)');
        
        if($isActiveFranchise != null){
            $qb->Where('f.isActive = 1');
        };

        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('f.name', ':search'))
            ->orWhere($qb->expr()->like('f.description', ':search'))
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
    public function getPaginatedFranchises($currentPage, $limit, $isActiveFranchise = null, $search = null): array
    {
        $qb = $this->createQueryBuilder('f');

        if($isActiveFranchise != null){
            $qb->andWhere('f.isActive = 1');
        };
        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('f.name', ':search'))
            ->orWhere($qb->expr()->like('f.description', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        };

        $qb->orderBy('f.id')
        // ->orderBy('a.created_at')
            ->setFirstResult(($currentPage * $limit) - $limit)
            ->setMaxResults($limit)
        ;
        return $qb->getQuery()->getResult();
    }

}
