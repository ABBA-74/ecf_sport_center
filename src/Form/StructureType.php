<?php

namespace App\Form;

use App\Entity\Feature;
use App\Entity\Franchise;
use App\Entity\Structure;
use App\Entity\User;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StructureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Nom',
            ])
            ->add('description', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Description',
            ])
            ->add('address', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Adresse',
            ])
            ->add('postCode', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Code postal',
                ])
            ->add('city', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Ville',
                ])
            ->add('phone', TextType::class, [
                'attr' => [
                    'class' => 'text-warning',
                ],
                'label' => 'Téléphone',
                ])
            ->add('manager', UserType::class, [
                    'data_class' => User::class,
                ])
            ->add('franchise', EntityType::class, [
                'class' => Franchise::class,
                'choice_label' => 'name',
                'placeholder' => 'Sélectionner une franchise',
                'attr' => [
                    'label' => 'Nom de la franchise'
                ]
                // 'mapped' => false
                ])
            // ->add('feature', EntityType::class, [
            ->add('feature', EntityType::class, [
                    'class' => Feature::class,
                    'expanded' => true,
                    'multiple' => true,
                    'mapped' => false,
                    'by_reference' => false,
                ])
            ;

            // dd($options);

            $formModifier = function(FormInterface $form, Franchise $franchise = null){
                $permissionsFranchise = $franchise === null ? [] : $franchise->getPermissions();
                // $form->add('permissionsFranchise', )
            };

            $builder->get('franchise')->addEventlistener(
                FormEvents::POST_SUBMIT,
                function (FormEvent $event) use ($formModifier) {
                    $franchise = $event->getForm()->getData();
                    $formModifier($event->getForm()->getParent(), $franchise);
                }
            );

        }




    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Structure::class,
        ]);
    }
}
