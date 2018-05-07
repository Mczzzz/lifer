<?php

namespace AppBundle\Service;

//use Symfony\Component\DependencyInjection\ContainerInterface;
//use Doctrine\ORM\EntityManager;
use AppBundle\Entity\Humans;
use AppBundle\Entity\Objects;

use AppBundle\Entity\UsersTree;

use AppBundle\Entity\Helpers\PeriodInfos;

class Human {


    //protected $container;
    protected $entityManager;
    protected $Me;

    protected $Human;

 	//public function __construct(ContainerInterface $container, EntityManager $entityManager) {
    public function __construct($entityManager,$user) {

        $this->entityManager = $entityManager;
        $this->Me = new \stdClass();
        $this->Me->User = $user->getToken()->getUser(); //on ajoute les infos immuables (sexe)


        //je load mon arbre
        $MyTreeRepo = $this->entityManager->getRepository(UsersTree::class);
        $MyTreeResult = $MyTreeRepo->findBy(array('userId' => $this->Me->User->getId()), array('parent' => 'ASC'));

        //je le met en forme et je l'insert dans mon objet Me
        //TODO : Les arbres de base (humain en fonction des container plus consequant pays ... sont à ajouter)
        if($MyTreeResult){

            $Mytree = new \stdClass();

            foreach($MyTreeResult as $MyNode){

                var_dump($MyNode->getParent());
                die();

            }


        }

        var_dump($MyTree);
        die();

        //Ajout du container des infos evoluantes (Age, poids, taille,sexe);
        $this->Me->RelativesInfos = new \stdClass();



        //calcul de mon age :
        $ndt = new \Datetime('now');

        $interval = date_diff($this->Me->User->getBirthDate(), $ndt);
        var_dump($interval->format('%R%a days'));
        var_dump($interval->format('%y Year %m Month %d Day %h Hours %i Minute %s Seconds'));
        //die();
        $this->Me->RelativesInfos->Old = new \stdClass();

        $this->Me->Old = (new \DateTime('now'));
        var_dump($this->Me->User->getBirthDate());
        die();


        //start MyInfos
        //Quand somme nous
        //calcul de mon Age
        //recuperation de ma localisation
            //Terre
                //Europe
                    //France
                        //Region
                            //Seine et Marne
                                //Saint Fargeau ponthierry
                                    //40 avenue Albert beaufils
    }


    //Protected function MyInternal


    protected function MyContextObject(){

        $MyObjectsRepo = $this->entityManager->getRepository(Objects::class);
        $MyObjectCollection = $MyObjectsRepo->findBy(array('usufruct' => $this->Me->getId()));
        var_dump($MyObjectCollection);
        die();

    }

/*
    //A voir comment je met en place

    protected function MyContextTree(){

        $MyTreeRepo = $this->entityManager->getRepository(ObjectsTree::class);

    }*/



	public function infos(){

        $this->MyContextObject();
        //die();
        //$this->container = $container;
        //$this->entityManager = $entityManager;
        $id = 3; 
        //je load mon humain
        $HumanRepo = $this->entityManager->getRepository(Humans::class);
        $MyHuman = $HumanRepo->find($id);

        if(!$MyHuman) return false;
       
        $this->Human = new \stdClass();

        $this->Human->infos = $MyHuman;

        //return true;


		return $this->Human;
	}


	//je charge mes proprietes personnelles
	//je charge mon arbre personnelle
	//je charge mes humains données personnelles
	//je charges leur arbre
	//je liste l'ensemble des mes évenements à venir

	//je load le passé lorsque j'en ai besoin par periode ou par 




}