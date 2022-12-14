<?php

namespace App\Form;

use App\Entity\Permission;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PermissionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('isActive')
            ->add('isGlobal')
            ->add('feature')
            ->add('feature', CollectionType::class, [
                'entry_type' => FeatureType::class,
                'entry_options' => ['label' => false]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Permission::class,
        ]);
    }
}
