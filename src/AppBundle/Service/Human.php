<?php

namespace AppBundle\Service;

//use Symfony\Component\DependencyInjection\ContainerInterface;
//use Doctrine\ORM\EntityManager;
use AppBundle\Entity\Humans;

class Human {


    //protected $container;
    protected $entityManager;
    protected $Me;

    protected $Human;

 	//public function __construct(ContainerInterface $container, EntityManager $entityManager) {
    public function __construct($entityManager,$user) {

        $this->entityManager = $entityManager;
        $this->Me = $user;

        //start MyInfos

    }

    protected function MyContextObject(){

        $MyObjectsRepo = $this->entityManager->getRepository(Objects::class);
        $MyObjectCollection = $MyObjectsRepo->findBy(array('usufruct' => $this->Me->getToken()->getUser()));

    }

/*
    //A voir comment je met en place

    protected function MyContextTree(){

        $MyTreeRepo = $this->entityManager->getRepository(ObjectsTree::class);

    }*/



	public function infos(){

        var_dump($this->Me->getToken()->getUser());
        die();
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