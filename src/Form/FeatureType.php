<?php

namespace App\Form;

use App\Entity\Feature;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class FeatureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un nom'
                        ]
                    ),
                    new Length([
                        'min' => 2,
                        'max' => 50,
                        'minMessage' => 'La nom doit être composé de {{ limit }} caractères minimum',
                        'maxMessage' => 'La nom doit être composé de {{ limit }} caractères maximum',
                        ]
                    )
                ]
            ])
            ->add('description', TextareaType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir une description'
                        ]
                    ),
                    new Length([
                        'min' => 2,
                        'max' => 500,
                        'minMessage' => 'La description doit être composé de {{ limit }} caractères minimum',
                        'maxMessage' => 'Le description doit être composé de {{ limit }} caractères maximum',
                        ]
                    )
                ],
                
                'attr' => ['rows' => 4],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Feature::class,
        ]);
    }
}
