<?php 

namespace AppBundle\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use AppBundle\Entity\UnityType;
use AppBundle\Entity\Unity;


class UnityFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $this->UnityType($manager);

    }



    private function UnityType($manager){


        $UTArray = array();
        $UArray = array();

        array_push($UTArray, array( "Name" => "Températures", "Posix" => "TEMP"   ,"Symbol" => "fas fa-thermometer-three-quarters"));

            $UArray['TEMP'] = array();
            array_push($UArray['TEMP'], array( "Symbol" => "°C"  , "Description" => "Celsius"    ,"Country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°F"  , "Description" => "Fahrenheit" ,"Country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "K"   , "Description" => "Kelvin"     ,"Country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°Ré" , "Description" => "Reaumur"    ,"Country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°N"  , "Description" => "Newton"     ,"Country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°Ra" , "Description" => "Rankine"    ,"Country" => null));


        array_push($UTArray, array( "Name" => "Volume"      , "Posix" => "VOL"    ,"Symbol" => "fas fa-cube"));

            $UArray['VOL'] = array();
            array_push($UArray['VOL'], array( "Symbol" => "m³"          , "Description" => "mètre cube"         ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "dm³"         , "Description" => "décimètre cube"     ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "cm³"         , "Description" => "centimètre cube"    ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "l"           , "Description" => "litre"              ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "dl"          , "Description" => "décilitre"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "cl"          , "Description" => "centilitre"         ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "ml"          , "Description" => "millilitre"         ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "fl oz(UK)"   , "Description" => "once liquide(UK)"   ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "fl oz(US)"   , "Description" => "once liquide(US)"   ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "in³"         , "Description" => "inch cube"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "ft³"         , "Description" => "foot cube"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "yd³"         , "Description" => "yard cube"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "gal(UK)"     , "Description" => "gallon uk"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "gal(US)"     , "Description" => "gallon us"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "bbl"         , "Description" => "baril de pétrole"   ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "pt(Imp)"     , "Description" => "pinte(UK)"          ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "pt(US fl)"   , "Description" => "pinte liquide(US)"  ,"Country" => null));
            array_push($UArray['VOL'], array( "Symbol" => "pt(US dry)"  , "Description" => "pinte sèche(US)"    ,"Country" => null));


        array_push($UTArray, array( "Name" => "Distance"    , "Posix" => "DIST"   ,"Symbol" => "fas fa-ruler"));

            $UArray['DIST'] = array();
            array_push($UArray['DIST'], array( "Symbol" => "km"           , "Description" => "kilomètre"      ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "m"            , "Description" => "mètre"          ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "dm"           , "Description" => "décimètre"      ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "cm"           , "Description" => "centimètre"     ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "mm"           , "Description" => "millimètre"     ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "mi"           , "Description" => "mille"          ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "in"           , "Description" => "inch"           ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "ft"           , "Description" => "foot"           ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "yd"           , "Description" => "yard"           ,"Country" => null));
            array_push($UArray['DIST'], array( "Symbol" => "mille marin"  , "Description" => "mille marin"    ,"Country" => null));


        array_push($UTArray, array( "Name" => "Poids"       , "Posix" => "WEIGHT"   ,"Symbol" => "fas fa-weight-hanging"));

            $UArray['WEIGHT'] = array();
            array_push($UArray['WEIGHT'], array( "Symbol" => "t"        , "Description" => "tonne"              ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "kg"       , "Description" => "kilogramme"         ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "hg"       , "Description" => "hectogramme"        ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "g"        , "Description" => "gramme"             ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "dg"       , "Description" => "décigramme"         ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "cg"       , "Description" => "centigramme"        ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "mg"       , "Description" => "milligramme"        ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "µg"       , "Description" => "microgramme"        ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "carat"    , "Description" => "carat"              ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "grain"    , "Description" => "grain"              ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "oz (av)"  , "Description" => "ounce avoirdupois"  ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "lb (av)"  , "Description" => "pound avoirdupois"  ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "cwt(UK)"  , "Description" => "quintal long"       ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "cwt(US)"  , "Description" => "quintal court"      ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "ton(UK)"  , "Description" => "tonne longue"       ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "°ton(US)" , "Description" => "tonne courte"       ,"Country" => null));
            array_push($UArray['WEIGHT'], array( "Symbol" => "st(UK)"   , "Description" => "stone"              ,"Country" => null));


        array_push($UTArray, array( "Name" => "Superficie"  , "Posix" => "AREA"   ,"Symbol" => "fas fa-ruler-combined"));

            $UArray['AREA'] = array();
            array_push($UArray['AREA'], array( "Symbol" => "km²"              , "Description" => "kilomètre carré"      ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "m²"               , "Description" => "mètre carré"          ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "dm²"              , "Description" => "décimètre carré"      ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "cm²"              , "Description" => "centimètre carré"     ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "mm²"              , "Description" => "millimètre carré"     ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "ha"               , "Description" => "hectare"              ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "a"                , "Description" => "are"                  ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "ca"               , "Description" => "centiare"             ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "mille²"           , "Description" => "mille carré"          ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "in²"              , "Description" => "inch carré"           ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "yd²"              , "Description" => "yard carré"           ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "ft²"              , "Description" => "foot carré"           ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "ro"               , "Description" => "rood"                 ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "acro"             , "Description" => "acre"                 ,"Country" => null));
            array_push($UArray['AREA'], array( "Symbol" => "mille nautique²"  , "Description" => "mille nautique carré" ,"Country" => null));

            
        array_push($UTArray, array( "Name" => "Vitesse"     , "Posix" => "SPEED"  ,"Symbol" => "fas fa-fighter-jet"));

            $UArray['SPEED'] = array();
            array_push($UArray['SPEED'], array( "Symbol" => "km/h"  , "Description" => "kilomètre par heure"       ,"Country" => null));
            array_push($UArray['SPEED'], array( "Symbol" => "m/s"   , "Description" => "mètre par seconde"         ,"Country" => null));
            array_push($UArray['SPEED'], array( "Symbol" => "mi/h"  , "Description" => "mille par heure"           ,"Country" => null));
            array_push($UArray['SPEED'], array( "Symbol" => "knot"  , "Description" => "mille nautique par heure"  ,"Country" => null));
            array_push($UArray['SPEED'], array( "Symbol" => "ma"    , "Description" => "mac"                       ,"Country" => null));


         
        array_push($UTArray, array( "Name" => "DataByte"    , "Posix" => "DATA"   ,"Symbol" => "fab fa-linode"));

            $UArray['DATA'] = array();
            array_push($UArray['DATA'], array( "Symbol" => "b"   , "Description" => "bit"          ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "O"   , "Description" => "Octet"        ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Ko"  , "Description" => "kilobyte"     ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Mo"  , "Description" => "megaoctet"    ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Go"  , "Description" => "gigaoctet"    ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "To"  , "Description" => "teraoctet"    ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Po"  , "Description" => "petaoctet"    ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Eo"  , "Description" => "exaoctet"     ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Zo"  , "Description" => "zettaoctet"   ,"Country" => null));
            array_push($UArray['DATA'], array( "Symbol" => "Yo"  , "Description" => "yottaoctet"   ,"Country" => null));


         
        array_push($UTArray, array( "Name" => "Temps"       , "Posix" => "TIME"    ,"Symbol" => "fas fa-stopwatch"));

            $UArray['TIME'] = array();
            array_push($UArray['TIME'], array( "Symbol" => "1an-365days"        , "Description" => "année commune"                ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "1an-366days"        , "Description" => "année bissextile"             ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "1an-365,2425 days"  , "Description" => "moyenne calendrier Grégorien" ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "1an-365,25 days"    , "Description" => "moyenne calendrier Julien"    ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "1an-365,24219 days" , "Description" => "année tropicale"              ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "semestre"           , "Description" => "semestre"                     ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "trimestre"          , "Description" => "trimestre"                    ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "mois"               , "Description" => "mois"                         ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "semaine"            , "Description" => "semaine"                      ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "jour"               , "Description" => "jour"                         ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "heure"              , "Description" => "heure"                        ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "min"                , "Description" => "minute"                       ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "s"                  , "Description" => "seconde"                      ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "ms"                 , "Description" => "milliseconde"                 ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "µs"                 , "Description" => "microseconde"                 ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "nanoseconde"        , "Description" => "nanoseconde"                  ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "picoseconde"        , "Description" => "picoseconde"                  ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "femtoseconde"       , "Description" => "femtoseconde"                 ,"Country" => null));
            array_push($UArray['TIME'], array( "Symbol" => "attoseconde"        , "Description" => "attoseconde"                  ,"Country" => null));


          
        array_push($UTArray, array( "Name" => "Fréquence"   , "Posix" => "FREQ"   ,"Symbol" => "material-icons waves"));

            $UArray['FREQ'] = array();
            array_push($UArray['FREQ'], array( "Symbol" => "Hz"   , "Description" => "Hertz"        ,"Country" => null));
            array_push($UArray['FREQ'], array( "Symbol" => "KHz"  , "Description" => "Kilohertz"    ,"Country" => null));
            array_push($UArray['FREQ'], array( "Symbol" => "MHz"  , "Description" => "Megahertz"    ,"Country" => null));
            array_push($UArray['FREQ'], array( "Symbol" => "GHz"  , "Description" => "Gigahertz"    ,"Country" => null));


          
        array_push($UTArray, array( "Name" => "Pression"    , "Posix" => "PRES"   ,"Symbol" => null));

            $UArray['PRES'] = array();
            array_push($UArray['PRES'], array( "Symbol" => "atm"   , "Description" => "Atmosphère"                  ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "bar"   , "Description" => "Bar"                         ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "mbar"  , "Description" => "Millibar"                    ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "Pa"    , "Description" => "Pascal"                      ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "hPa"   , "Description" => "Hectopascal"                 ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "Psi"   , "Description" => "Livre-force par pouce carré" ,"Country" => null));
            array_push($UArray['PRES'], array( "Symbol" => "Torr"  , "Description" => "Torr"                        ,"Country" => null));


          
        array_push($UTArray, array( "Name" => "Energie"     , "Posix" => "ENER"   ,"Symbol" => "fas fa-burn"));

            $UArray['ENER'] = array();
            array_push($UArray['ENER'], array( "Symbol" => "J"     , "Description" => "Joule"                ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "KJ"    , "Description" => "Kilojoule"            ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "cal"   , "Description" => "Calorie"              ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "kcal"  , "Description" => "Kilocalorie"          ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "V"     , "Description" => "Volt"                 ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "I"     , "Description" => "Intensité"            ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "W"     , "Description" => "Watt"                 ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "Wh"    , "Description" => "Watt-heure"           ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "kWh"   , "Description" => "Kilowatt-heure"       ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "BTU"   , "Description" => "British thermal unit" ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "thm"   , "Description" => "Therm américain"      ,"Country" => null));
            array_push($UArray['ENER'], array( "Symbol" => "ft-lb" , "Description" => "Pied-livre"           ,"Country" => null));


          
        array_push($UTArray, array( "Name" => "Angles"      , "Posix" => "ANG"    ,"Symbol" => "material-icons signal_wifi_4_bar"));

            $UArray['ANG'] = array();
            array_push($UArray['ANG'], array( "Symbol" => "°"              , "Description" => "Degré"           ,"Country" => null));
            array_push($UArray['ANG'], array( "Symbol" => "grad(gon)"      , "Description" => "Grade"           ,"Country" => null));
            array_push($UArray['ANG'], array( "Symbol" => "Mil angulaire"  , "Description" => "Mil angulaire"   ,"Country" => null));
            array_push($UArray['ANG'], array( "Symbol" => "'"             , "Description" => "Minute d'arc"   ,"Country" => null));
            array_push($UArray['ANG'], array( "Symbol" => "rad"            , "Description" => "Radian"          ,"Country" => null));
            array_push($UArray['ANG'], array( "Symbol" => "\""             , "Description" => "'Seconde d'arc" ,"Country" => null));



          
        array_push($UTArray, array( "Name" => "Monnaie"     , "Posix" => "CUR"    ,"Symbol" => "fas fa-money-bill-alt"));

            $UArray['CUR'] = array();
            array_push($UArray['CUR'], array( "Symbol" => "€"  , "Description" => "Euro"    ,"Country" => null));
            array_push($UArray['CUR'], array( "Symbol" => "$"  , "Description" => "Dollar"    ,"Country" => null));

          
        array_push($UTArray, array( "Name" => "Crypto"      , "Posix" => "CRYPTO" ,"Symbol" => "fab fa-bitcoin"));

            $UArray['CRYPTO'] = array();
            array_push($UArray['CRYPTO'], array( "Symbol" => "BTC"  , "Description" => "Bitcoin"     ,"Country" => null));
            array_push($UArray['CRYPTO'], array( "Symbol" => "ETH"  , "Description" => "Ethereum"    ,"Country" => null));

          


        foreach ($UTArray as $value){

            $UT = new UnityType();
            $UT->setName($value['Name']);
            $UT->setPosix($value['Posix']);
            $UT->setSymbol($value['Symbol']);

            $manager->persist($UT);



            foreach ($UArray[$value['Posix']] as $val){

                $U = new Unity();
                $U->setSymbol($val['Symbol']);
                $U->setDescription($val['Description']);
                $U->setCountry($val['Country']);
                $U->setUnityType($UT);

                $manager->persist($U);

            }



        }

        $manager->flush();

    }





}