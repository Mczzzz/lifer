<?php 

namespace AppBundle\DataFixtures;

use AppBundle\Entity\ResourcesTypes;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        //On initialise les datas de fixtures
        $RTArray = array();
        array_push($RTArray, array( "Name" => "text", "Picto" => "title", "Enable" => true, "Color" => "blue") );
        array_push($RTArray, array( "Name" => "image", "Picto" => "photo", "Enable" => true, "Color" => "orange") );


        foreach ($array as $value){

            $RT = new ResourcesTypes();
            $RT->setName($value->Name);
            $RT->setPicto($value->Picto);
            $RT->setEnable($value->Enable);
            $RT->setColor($value->Color);

            $manager->persist($RT);


        }

        //on passe les enregistrements








        $manager->flush();
    }

}