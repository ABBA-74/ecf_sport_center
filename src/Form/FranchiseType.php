<?php

namespace App\Form;

use App\Entity\Feature;
use App\Entity\Franchise;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FranchiseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom',
            ])
            ->add('isActive', CheckboxType::class, [
                'label'    => 'Active',
                'required' => false,
            ])
            ->add('description', TextType::class, [
                'label' => 'Description',
            ])
            ->add('address', TextType::class, [
                'label' => 'Adresse',
            ])
            ->add('postCode', TextType::class, [
                'label' => 'Code postal',
                ])
            ->add('city', TextType::class, [
                'label' => 'Ville',
                ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone',
                ])
            ->add('manager', UserType::class, [
                    'data_class' => User::class,
                ])
            ->add('feature', EntityType::class, [
                    'class' => Feature::class,
                    'expanded' => true,
                    'multiple' => true,
                    'mapped' => false,
                    'by_reference' => false,
                ])
            ;
        }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Franchise::class,
        ]);
    }
}
