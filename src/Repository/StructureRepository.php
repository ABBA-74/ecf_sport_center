<?php

namespace App\Repository;

use App\Entity\Structure;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Structure>
 *
 * @method Structure|null find($id, $lockMode = null, $lockVersion = null)
 * @method Structure|null findOneBy(array $criteria, array $orderBy = null)
 * @method Structure[]    findAll()
 * @method Structure[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StructureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Structure::class);
    }

    public function add(Structure $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Structure $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Structure[] Returns an array of Structure objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Structure
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    /**
     * Return all active structures
     *
     * @return array
     */
    public function findAllActiveStructure(): array
    {
        return $this->createQueryBuilder('s')
           ->andWhere('s.isActive = 1')
           ->orderBy('s.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
    }

    /**
     * Return number of structures
     *
     * @return integer
     */
    public function getTotalStructures($isActiveStructure = null, $search = null): int
    {
        $qb = $this->createQueryBuilder('s')
            ->select('COUNT(s)');
        
        if($isActiveStructure != null){
            $qb->Where('s.isActive = 1');
        };

        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('s.name', ':search'))
            ->orWhere($qb->expr()->like('s.description', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        }
        return $qb->getQuery()->getSingleScalarResult();
    }

    /**
     * Return number of active structures
     *
     * @return integer
     */
    public function getTotalActiveStructures(): int
    {
        $qb = $this->createQueryBuilder('s')
           ->select('COUNT(s)')
           ->where('s.isActive = 1');
        return $qb->getQuery()->getSingleScalarResult();
    }

    /**
     * Return all structures per page
     *
     * @param int $currentPage
     * @param int $limit
     * @return array
     */
    public function getPaginatedStructures($currentPage, $limit, $isActiveStructure = null, $search = null): array
    {
        $qb = $this->createQueryBuilder('s');

        if($isActiveStructure != null){
            $qb->andWhere('s.isActive = 1');
        };
        if($search != null || $search != ''){
            $qb->andWhere($qb->expr()->like('s.name', ':search'))
            ->orWhere($qb->expr()->like('s.description', ':search'))
            ->setParameter(':search', '%' . $search . '%');
        };

        $qb->orderBy('s.id')
        // ->orderBy('a.created_at')
            ->setFirstResult(($currentPage * $limit) - $limit)
            ->setMaxResults($limit)
        ;
        return $qb->getQuery()->getResult();
    }
}
