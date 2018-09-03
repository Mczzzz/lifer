<?php 

namespace AppBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use AppBundle\Entity\UnityTypes;


class UnityFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $this->Unity($manager);

    }



    private function Unity($manager){


        $UTArray = array();
        array_push($UTArray, array( "Name" => "Températures", "Symbol" => null));
        array_push($UTArray, array( "Name" => "Volume"      , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Distance"    , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Poids"       , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Superficie"  , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Vitesse"     , "Symbol" => null));
        array_push($UTArray, array( "Name" => "DataByte"    , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Temps"       , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Fréquence"   , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Pression"    , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Energie"     , "Symbol" => null));
        array_push($UTArray, array( "Name" => "Angles"      , "Symbol" => null));


        foreach ($UTArray as $value){

            $UT = new UnityTypes();
            $UT->setName($value['Name']);
            $UT->setSymbol($value['Symbol']);


            $manager->persist($UT);


        }

        $manager->flush();

    }




}