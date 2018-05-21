<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Doctrine\ORM\EntityRepository;

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
                    'placeholder' => 'Selectionnez un objet',
                ))
                ->add('parent', EntityType::class, array(
                    'class' => Objects_tree::class,
                    'choice_label' => 'name',
                    'required' => false,
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
