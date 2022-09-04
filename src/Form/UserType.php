<?php

namespace App\Form;

use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use App\Repository\PermissionRepository;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(
        FormBuilderInterface $builder,
        array $options): void
    {
        $builder
            ->add('email', TextType::class)
            // ->add('roles')
            ->add('password', TextType::class)
            ->add('firstname', TextType::class)
            ->add('lastname', TextType::class)
            // ->add('isActive', BooleanType::class) ////
            ->add('phone', TextType::class)
            // ->add('createdAt')
            // ->add('updatedAt')
            // ->add('slug')
//             ->add('permissions', EntityType::class, [
//                 'class' => Permission::class,
//                 // 'choice_label' => $this->$permission->getFeature()->getName(),
//                 // 'query_builder' => function(PermissionRepository $permissionRepository) {
//                 //     return $permissionRepository->getUniqueCompanies();
// // },
//                 'mapped' => false
//                 ])
            // ->add('structure', EntityType::class, [
            //     'class' => Structure::class,
            //     'mapped' => false
            //     // 'choice_label' => 'name',
            //     ])
            // ->add('franchise', EntityType::class, [
            //     'class' => Franchise::class,
            //     'choice_label' => 'name',
            //     'mapped' => false
            //     // 'choice_label' => $franchise->getFranchises,
            //     ])
            // ->add('permissions', ChoiceType::class)
            // ->add('structure', ChoiceType::class)
            // ->add('franchise', ChoiceType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
