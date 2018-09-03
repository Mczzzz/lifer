<?php 

namespace AppBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use AppBundle\Entity\ResourcesTypes;
use AppBundle\Entity\UnityTypes;


class UnityFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $this->Unity($manager);

    }



    private function ResourcesTypes($manager){


            //On initialise les datas de fixtures
        $RTArray = array();
        array_push($RTArray, array( "Name" => "text", "Picto" => "title", "Enable" => true, "Color" => "blue") );
        array_push($RTArray, array( "Name" => "image", "Picto" => "photo", "Enable" => true, "Color" => "orange") );


        foreach ($RTArray as $value){

            $RT = new ResourcesTypes();
            $RT->setName($value['Name']);
            $RT->setPicto($value['Picto']);
            $RT->setEnable($value['Enable']);
            $RT->setColor($value['Color']);

            $manager->persist($RT);


        }

        $manager->flush();

    }




}