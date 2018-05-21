<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Doctrine\ORM\EntityRepository;

use AppBundle\Entity\User;
use AppBundle\Entity\Objects;
use AppBundle\Entity\Objects_tree;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class Objects_treeType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name')
                ->add('object', EntityType::class, array(
                    'class' => Objects::class,
                    'choice_label' => 'Name',
                ))
                ->add('parent')
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
            'data_class' => 'AppBundle\Entity\Objects_tree'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_objects_tree';
    }


}
