<?php

namespace App\Repository;

use App\Entity\Feature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Feature>
 *
 * @method Feature|null find($id, $lockMode = null, $lockVersion = null)
 * @method Feature|null findOneBy(array $criteria, array $orderBy = null)
 * @method Feature[]    findAll()
 * @method Feature[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FeatureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Feature::class);
    }

    public function add(Feature $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Feature $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Feature[] Returns an array of Feature objects
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

//    public function findOneBySomeField($value): ?Feature
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    /**
     * Return total of features filtered by search input and their status
     *
     * @return integer
     */
    public function getTotalFeatures($isActiveFeature = null, $search = null): int
    {
        $qb = $this->createQueryBuilder('f')
            ->select('COUNT(f)');
        
        if($isActiveFeature != null){
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
     * Return total of active features
     *
     * @return integer
     */
    public function getInactiveFeatures(): array
    {
        return $this->createQueryBuilder('f')
        //    ->select('COUNT(s)')
           ->where('f.isActive = 0')
           ->getQuery()
           ->getResult();
        // return $qb->getQuery()->getSingleScalarResult();
    }

    /**
     * Return all features per page
     *
     * @param int $currentPage
     * @param int $limit
     * @return array
     */
    public function getPaginatedFeatures($currentPage, $limit, $isActiveFeature = null, $search = null): array
    {
        $qb = $this->createQueryBuilder('f');

        if($isActiveFeature != null){
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
