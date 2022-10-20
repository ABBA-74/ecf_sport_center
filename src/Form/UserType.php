<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class UserType extends AbstractType
{
    public function buildForm(
        FormBuilderInterface $builder,
        array $options): void
    {
        $builder
            ->add('email', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un email'
                        ]
                    ),
                    new Email([
                        'message' => 'Veuillez saisir un email valide'
                        ]
                    ),
                ]
            ])
            ->add('password', TextType::class)
            ->add('firstname', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un prénom'
                        ]
                    ),
                    new Length([
                        'min' => 2,
                        'max' => 50,
                        'minMessage' => 'Le prénom doit être composé de {{ limit }} caractères minimum',
                        'maxMessage' => 'Le prénom doit être composé de {{ limit }} caractères maximum',
                        ]
                    )
                ]
            ])
            ->add('lastname', TextType::class, [
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
                ],
            ])
            ->add('phone', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez saisir un numéro de téléphone'
                        ]
                    ),
                    new Regex([
                        'pattern' => '/^0{1}[1-9]{1}\d{8}$/',
                        'message' => 'Veuillez saisir un numéro de téléphone valide'
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
