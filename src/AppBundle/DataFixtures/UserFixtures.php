<?php 

namespace AppBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use AppBundle\Entity\UnityType;


class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $this->User($manager);

    }



    private function User($manager){


        $UTArray = array();
        array_push($UTArray, array( "Name" => "Températures", "Posix" => "TEMP"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Volume"      , "Posix" => "VOL"    ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Distance"    , "Posix" => "DIST"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Poids"       , "Posix" => "POID"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Superficie"  , "Posix" => "AREA"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Vitesse"     , "Posix" => "SPEED"  ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "DataByte"    , "Posix" => "DATA"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Temps"       , "Posix" => "TMP"    ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Fréquence"   , "Posix" => "FREQ"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Pression"    , "Posix" => "PRES"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Energie"     , "Posix" => "ENER"   ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Angles"      , "Posix" => "ANG"    ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Monnaie"     , "Posix" => "CUR"    ,"Symbol" => null));
        array_push($UTArray, array( "Name" => "Crypto"      , "Posix" => "CRYPTO" ,"Symbol" => null));


        foreach ($UTArray as $value){

            $UT = new UnityType();
            $UT->setName($value['Name']);
            $UT->setSymbol($value['Symbol']);


            $manager->persist($UT);


        }

        $manager->flush();

    }




}