<?php

namespace AppBundle\Services;

//use Symfony\Component\DependencyInjection\ContainerInterface;
use Doctrine\ORM\EntityManager;

class Human {


    //protected $container;
    protected $entityManager;

    protected $Human;

 	//public function __construct(ContainerInterface $container, EntityManager $entityManager) {
    public function __construct( EntityManager $entityManager) {
        //$this->container = $container;
        $this->entityManager = $entityManager;
        $id = 3; 
        //je load mon humain
       	$HumanRepo = $entityManager->getRepository(Humans::class);
        $MyHuman = $HumanRepo->find($id);

        if(!$MyHuman) return false;
       
        $this->Human = new stdClass();

        $this->Human->infos = $MyHuman;

        return true
    }




	protected function info(){

		return $this->Human;
	}


	//je charge mes proprietes personnelles
	//je charge mon arbre personnelle
	//je charge mes humains données personnelles
	//je charges leur arbre
	//je liste l'ensemble des mes évenements à venir

	//je load le passé lorsque j'en ai besoin par periode ou par 




}