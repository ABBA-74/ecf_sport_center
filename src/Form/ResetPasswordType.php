<?php

namespace App\Form;

use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class ResetPasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('password', RepeatedType::class, [
            'type' => PasswordType::class,
            'invalid_message' => 'Les mots de passes ne sont pas identiques',
            'options' => ['attr' => ['class' => 'password-field']],
            'required' => true,
            'first_options'  => [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Nouveau mot de passe'
                ]
            ],
            'second_options' => [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Confirmer le mot de passe'
                ]
            ],
            'constraints' => [
                new NotBlank([
                    'message' => 'Veuillez saisir un nouveau mot de passe'
                    ]
                ),
                new Regex([
                    'pattern'=> '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/',
                    'message' => 'Le mot de passe doit contenir minimum 8 caractères, au moins 1 lettre majuscule, 
                    1 lettre minuscule, 1 chiffre et 1 caractère spécial'
                ]),
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
