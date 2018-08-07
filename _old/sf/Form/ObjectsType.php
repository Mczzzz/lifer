<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use AppBundle\Entity\Humans;
use AppBundle\Entity\User;
use AppBundle\Entity\Objects;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class ObjectsType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name')
        ->add('owner', EntityType::class, array(
            'class' => Humans::class,
            'choice_label' => 'firstName',
        ))
        ->add('usufruct', EntityType::class, array(
            'class' => Humans::class,
            'choice_label' => 'firstName',
        ))
        ->add('localisation')
        ->add('containerStore', EntityType::class, array(
            'class' => Objects::class,
            'choice_label' => 'Name',
        ))
        ->add('containerIn', EntityType::class, array(
            'class' => Objects::class,
            'choice_label' => 'Name',
        ))
        ->add('creator', EntityType::class, array(
            'class' => User::class,
            'choice_label' => 'username',
        ));
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Objects'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_objects';
    }


}
