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
        array_push($UTArray, array( "Name" => "Températures", "Posix" => "TEMP"   ,"Symbol" => null));

            $UArray['TEMP'] = array();
            array_push($UArray['TEMP'], array( "Symbol" => "°C"  , "Description" => "Celsius"    ,"country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°F"  , "Description" => "Fahrenheit" ,"country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "K"   , "Description" => "Kelvin"     ,"country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°Ré" , "Description" => "Reaumur"    ,"country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°N"  , "Description" => "Newton"     ,"country" => null));
            array_push($UArray['TEMP'], array( "Symbol" => "°Ra" , "Description" => "Rankine"    ,"country" => null));

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
            $UT->setPosix($value['Posix']);
            $UT->setSymbol($value['Symbol']);


            $manager->persist($UT);



            foreach ($UArray[$value['Posix']] as $val){

                $U = new Unity();
                $U->setSymbol($val['Symbol']);
                $U->setDescription($val['Description']);
                $U->setCountry($val['Country']);


                $manager->persist($U);

            }



        }

        $manager->flush();

    }


      /*  (7 ,'m³','mètre cube',NULL,1),
        (8 ,'dm³','décimètre cube',NULL,2),
        (9 ,'cm³','centimètre cube',NULL,2),
        (10,'l','litre',NULL,2),
        (11,'dl','décilitre',NULL,2),
        (12,'cl','centilitre',NULL,2),
        (13,'ml','millilitre',NULL,2),
        (14,'fl oz(UK)','once liquide(UK)',NULL,2),
        (15,'fl oz(US)','once liquide(US)',NULL,2),
        (16,'in³','inch cube',NULL,2),
        (17,'ft³','foot cube',NULL,2),
        (18,'yd³','yard cube',NULL,2),
        (19,'gal(UK)','gallon uk',NULL,2),
        (20,'gal(US)','gallon us',NULL,2),
        (21,'bbl','baril de pétrole',NULL,2),
        (22,'pt(Imp)','pinte(UK)',NULL,2),
        (23,'pt(US fl)','pinte liquide(US)',NULL,2),
        (24,'pt(US dry)','pinte sèche(US)',NULL,2),
        (25,'km','kilomètre',NULL,3),
        (26,'m','mètre',NULL,3),
        (27,'dm','décimètre',NULL,3),
        (28,'cm','centimètre',NULL,3),
        (29,'mm','millimètre',NULL,3),
        (30,'mi','mille',NULL,3),
        (31,'in','inch',NULL,3),
        (32,'ft','foot',NULL,3),
        (33,'yd','yard',NULL,3),
        (34,'mille marin','mille marin',NULL,3),
        (35,'t','tonne',NULL,4),
        (36,'kg','kilogramme',NULL,4),
        (37,'hg','hectogramme',NULL,4),
        (38,'g','gramme',NULL,4),
        (39,'dg','décigramme',NULL,4),
        (40,'cg','centigramme',NULL,4),
        (41,'mg','milligramme',NULL,4),
        (42,'µg','microgramme',NULL,4),
        (43,'carat','carat',NULL,4),
        (44,'grain','grain',NULL,4),
        (45,'oz (av)','ounce avoirdupois',NULL,4),
        (46,'lb (av)','pound avoirdupois',NULL,4),
        (47,'cwt(UK)','quintal long',NULL,4),
        (48,'cwt(US)','quintal court',NULL,4),
        (49,'ton(UK)','tonne longue',NULL,4),
        (50,'ton(US)','tonne courte',NULL,4),
        (51,'st(UK)','stone',NULL,4),
        (52,'km²','kilomètre carré',NULL,5),
        (53,'m²','mètre carré',NULL,5),
        (54,'dm²','décimètre carré',NULL,5),
        (55,'cm²','centimètre carré',NULL,5),
        (56,'mm²','millimètre carré',NULL,5),
        (57,'ha','hectare',NULL,5),
        (58,'a','are',NULL,5),
        (59,'ca','centiare',NULL,5),
        (60,'mille²','mille carré',NULL,5),
        (61,'in²','inch carré',NULL,5),
        (62,'yd²','yard carré',NULL,5),
        (63,'ft²','foot carré',NULL,5),
        (64,'ro','rood',NULL,5),
        (65,'acro','acre',NULL,5),
        (66,'mille nautique²','mille nautique carré',NULL,5),
        (67,'kmph = km/h','kilomètre par heure',NULL,6),
        (68,'mps = m/s','mètre par seconde',NULL,6),
        (69,'mph = mi/h','mille par heure',NULL,6),
        (70,'knot','mille nautique par heure',NULL,6),
        (71,'ma','mac',NULL,6),
        (72,'1 année = 365 days','année commune',NULL,8),
        (73,'1 année = 366 days','année bissextile',NULL,8),
        (74,'1 année = 365,2425 days','moyenne calendrier Grégorien',NULL,8),
        (75,'1 année = 365,25 days','moyenne calendrier Julien',NULL,8),
        (76,'1 année = 365,24219 days','année tropicale',NULL,8),
        (77,'semaine','semaine',NULL,8),
        (78,'jour','jour',NULL,8),
        (79,'heure','heure',NULL,8),
        (80,'min','minute',NULL,8),
        (81,'s','seconde',NULL,8),
        (82,'ms','milliseconde',NULL,8),
        (83,'µs','microseconde',NULL,8),
        (84,'nanoseconde','nanoseconde',NULL,8),
        (85,'picoseconde','picoseconde',NULL,8),
        (86,'femtoseconde','femtoseconde',NULL,8),
        (87,'attoseconde','attoseconde',NULL,8),
        (88,'b','bit',NULL,7),
        (89,'O','Octet',NULL,7),
        (90,'Ko','kilobyte',NULL,7),
        (91,'Mo','megaoctet',NULL,7),
        (92,'Go','gigaoctet',NULL,7),
        (93,'To','teraoctet',NULL,7),
        (94,'Po','petaoctet',NULL,7),
        (95,'Eo','exaoctet',NULL,7),
        (96,'Zo','zettaoctet',NULL,7),
        (97,'Yo','yottaoctet',NULL,7),
        (98,'Hz','Hertz',NULL,9),
        (99,'KHz','Kilohertz',NULL,9),
        (100,'MHz','Megahertz',NULL,9),
        (101,'GHz','Gigahertz',NULL,9),
        (102,'atm','Atmosphère',NULL,10),
        (103,'bar','Bar',NULL,10),
        (104,'mbar','Millibar',NULL,10),
        (105,'Pa','Pascal',NULL,10),
        (106,'hPa','Hectopascal',NULL,10),
        (107,'Psi','Livre-force par pouce carré',NULL,10),
        (108,'Torr','Torr',NULL,10),
        (109,'J','Joule',NULL,11),
        (110,'KJ','Kilojoule',NULL,11),
        (111,'cal','Calorie',NULL,11),
        (112,'kcal','Kilocalorie',NULL,11),
        (113,'Wh','Watt-heure',NULL,11),
        (114,'kWh','Kilowatt-heure',NULL,11),
        (115,'BTU','British thermal unit',NULL,11),
        (116,'thm','Therm américain',NULL,11),
        (117,'ft-lb','Pied-livre',NULL,11),
        (118,'°','Degré',NULL,12),
        (119,'grad(gon)','Grade',NULL,12),
        (120,'Mil angulaire','Mil angulaire',NULL,12),
        (121,'\'','Minute d\'arc',NULL,12),
        (122,'rad','Radian',NULL,12),
        (123,'\"','Seconde d\'arc',NULL,12);
*/





}