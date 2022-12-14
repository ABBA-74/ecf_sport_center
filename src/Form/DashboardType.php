<?php

namespace App\Form;

use App\Entity\Franchise;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DashboardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('franchise', EntityType::class, [
                'class' => Franchise::class,
                'choice_label' => 'name',
                'placeholder' => 'Sélectionner une franchise',
                'attr' => [
                    'label' => 'Nom de la franchise'
                ],
            ]);

            $formModifier = function(FormInterface $form, Franchise $franchise = null){
                $permissionsFranchise = $franchise === null ? [] : $franchise->getPermissions();
            };

            $builder->get('franchise')->addEventlistener(
                FormEvents::POST_SUBMIT,
                function (FormEvent $event) use ($formModifier) {
                    $franchise = $event->getForm()->getData();
                    $formModifier($event->getForm()->getParent(), $franchise);
                }
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Dashboard::class,
        ]);
    }
}
