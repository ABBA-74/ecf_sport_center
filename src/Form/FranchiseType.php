<?php

namespace App\Form;

use App\Entity\Feature;
use App\Entity\Franchise;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Regex;

class FranchiseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('manager', UserType::class, [
                'data_class' => User::class,
                'required' => true,
                'constraints' => [
                    new UniqueEntity([
                        'fields' => 'email',
                        'message' => 'Cette adresse email est déjà utilisée'
                    ])
                ]
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez saisir un nom'
                            ]
                        ),
                        new Length([
                            'min' => 2,
                            'max' => 50,
                            'minMessage' => 'Le nom doit être composé de {{ limit }} caractères minimum',
                            'maxMessage' => 'Le nom doit être composé de {{ limit }} caractères maximum',
                            ]
                        )
                    ]
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
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une adresse'
                        ]
                    ),
                    new Length([
                        'min' => 2,
                        'max' => 150,
                        'minMessage' => 'L\'adresse doit être composé de {{ limit }} caractères minimum',
                        'maxMessage' => 'L\'adresse doit être composé de {{ limit }} caractères maximum',
                        ]
                    )
                ]
            ])
            ->add('postCode', TextType::class, [
                'label' => 'Code postal',
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un code postal'
                        ]
                    ),
                    new Regex([
                        'pattern' => '/^[0-9]{5}/',
                        'message' => 'Veuillez saisir un code postal valide'
                    ])
                ]
            ])
            ->add('city', TextType::class, [
                'label' => 'Ville',
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une ville'
                        ]
                    ),
                    new Length([
                        'min' => 2,
                        'max' => 50,
                        'minMessage' => 'La ville doit être composé de {{ limit }} caractères minimum',
                        'maxMessage' => 'La ville doit être composé de {{ limit }} caractères maximum',
                        ]
                    )
                ]
            ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone',
                'constraints' => [
                    new Regex([
                        'pattern' => '/^0{1}[1-9]{1}\d{8}$/',
                        'message' => 'Veuillez saisir un numéro de téléphone valide'
                    ])
                ]
            ])
            ->add('feature', EntityType::class, [
                    'class' => Feature::class,
                    'expanded' => true,
                    'multiple' => true,
                    'mapped' => false,
                    'by_reference' => false,
                    'required' => true,
                    'constraints' => [
                        new Count([
                            'min' => 1,
                            'minMessage' => 'Veuillez choisir au minimum 1 option'
                        ])
                    ]
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
