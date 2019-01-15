<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Intervention\Image\ImageManager;

use AppBundle\Entity\Notes;
use AppBundle\Entity\Resources;
use AppBundle\Entity\Items;

use AppBundle\Helper\timestamp;

/**
 * Notes controller.
 *
 * @Route("api_v1/notes")
 */

class NotesController extends Controller
{

    /**
     * @Route("/push", name="api_notes_push")
     * @Method("POST")
    */

    public function pushAction(Request $request)
    {

/*        Errors:
        1 : Security
        2 : Data Problem
        3 : Crash*/

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";


/*        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();
 
        if(!$isAjax){

            $res->error = "1.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));

        }*/


        //accueil de la requete
        $request = Request::createFromGlobals();

        if(!$request){

            $res->error = "2.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));


        }



        //users infos
        $this->user = $this->getUser();

        if(!$this->user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }




        //SERIALIZED OBJECT
        $datas = json_decode($request->getContent());


//ok
        if(!$datas || !is_array($datas)){

            $res->error = "2.2";
            $res->msg = "Datas Corrupted";

            return new response(json_encode($res));

        }


        // j'enregistre en base ma note
        $this->em = $this->getDoctrine()->getManager();

        //$response = new \stdClass();
        $arrayRes = array();

        foreach ($datas as $NoteElement) {

        $StoreResult = $this->storeElement($NoteElement);


            $Itemresponse = new \stdClass();

             $Itemresponse->timestamp = $NoteElement->timestamp;

            $Itemresponse->note_id    = $StoreResult["Note"]->getId();
            $Itemresponse->note_tmpId = $NoteElement->note_id;
            $Itemresponse->note_timestamp = $NoteElement->note_timestamp;
            $Itemresponse->scope = "note";

            if($NoteElement->ressource_id){


                $Itemresponse->ressource_id    = $StoreResult["Resource"]->getId();
                $Itemresponse->ressource_tmpId = $NoteElement->ressource_id;
                $Itemresponse->ressource_timestamp = $NoteElement->ressource_timestamp;
                $Itemresponse->scope = "ressource";


                if($NoteElement->item_id){

                    $Itemresponse->item_id = $StoreResult["Item"]->getId();
                    $Itemresponse->item_tmpId = $NoteElement->item_id;
                    $Itemresponse->item_timestamp = $NoteElement->item_timestamp;
                    $Itemresponse->type = $NoteElement->item_type;
                    $Itemresponse->item_path = $NoteElement->item_path;
                    $Itemresponse->call = "push";
                    $Itemresponse->scope = "item";

                }


            }

            array_push($arrayRes,$Itemresponse);

        }


            $res->error = "0";
            $res->msg   = "SUCCESS";
            $res->data  = $arrayRes;


            $MyResponse = new response(json_encode($res));
            $MyResponse->headers->set('Content-Type', 'application/json');

            return $MyResponse;


/*
# id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, birth_date
1, lifer, lifer, tlili.yasmine@gmail.com, tlili.yasmine@gmail.com, 1, , $2y$13$ms1PMDxXpt8.jY20CLnVGu3BkdDpeubKXMHWrkNzuACpR5Wp.9wtO, 2018-07-16 09:37:40, , , a:0:{}, 1981-05-25 00:00:00
2, MyLove, mylove, ax.delpierre@gmail.com, ax.delpierre@gmail.com, 1, , $2y$13$0RhTBsVuawSerODSXXwTG.ZEybGC37ZgXYu6iRgPKff3GJan/Icpq, 2018-07-25 21:10:21, , , a:0:{}, 1982-07-23 00:00:00
3, Mczzzz, mczzzz, g.bailly.akasha@gmail.com, g.bailly.akasha@gmail.com, 1, , $2y$13$UpI/NkvLIwIXMlVj4EvrH./Q5xQl4mzBO92404orJg5f1YWSaSM.C, 2018-08-18 21:48:14, , , a:0:{}, 1977-10-17 21:35:00

*/



    }




    private function storeElement($NoteElement){

        $arrayResponse = array();

        $MyNote = $this->storeNote($NoteElement);

        $arrayResponse["Note"] = $MyNote;

        if($NoteElement->ressource_id){



            $MyResource = $this->storeResource($NoteElement, $MyNote);

            $arrayResponse["Resource"] = $MyResource;


            if($NoteElement->item_id){


                $MyItem = $this->storeItem($NoteElement,$MyResource);
         
                $arrayResponse["Item"] = $MyItem;

            }


        }



        return $arrayResponse;      

    }





    private function storeNote($NoteElement){


            if($NoteElement->note_id === false){

            $Note = new Notes();
            $Note->setCreator($this->user);

        }elseif(substr($NoteElement->note_id,0,3) == "tmp"){

             $NoteList =  $this->em->getRepository('AppBundle:Notes')->findBy(array('tmpId' => $NoteElement->note_id));

             if(!$NoteList){

                    $Note = new Notes();
                    $Note->setCreator($this->user);
                    $Note->setTmpId($NoteElement->note_id);

/*                    $test = new \stdClass();
                    $test->format = 'NOW()';*/
                    $toto = new timestamp();

                    $Note->setCreateBDD('now');
             }else{

                $Note = $NoteList[0];
             }

        }else{

            $Note =  $this->em->getRepository('AppBundle:Notes')->find($NoteElement->note_id);
        
        }


            $Note->setName($NoteElement->note_title);

            //if(!$NoteElement->timestamp){
            if(0){
                $ndt = new \Datetime('now');
            
            }else{
                $ndt = new \Datetime($NoteElement->note_timestamp);
            }

           
            $Note->setUpdateAPP($ndt->format("Y-m-d H:i:s.u"));

             $this->em->persist($Note);
             $this->em->flush();


             return $Note;


    }





    private function storeResource($NoteElement,$Note){


         //j'attaque le traitement de la ressource
            if($NoteElement->ressource_id === false){

                $Resource = new Resources();
                $Resource->setCreator($this->user);

            }elseif(substr($NoteElement->ressource_id,0,3) == "tmp"){

                $ResourceList = $this->em->getRepository('AppBundle:Resources')->findBy(array('tmpId' => $NoteElement->ressource_id));

                if(!$ResourceList){

                        $Resource = new Resources();
                        $Resource->setCreator($this->user);
                        $Resource->setTmpId($NoteElement->ressource_id);

                 }else{
     
                    $Resource = $ResourceList[0];
     
                 }

     
            }else{

                $Resource = $this->em->getRepository('AppBundle:Resources')->find($NoteElement->ressource_id);
            
            }






            $Resource->setTitle($NoteElement->ressource_title);
            $Resource->setNote($Note);
            $Resource->setCreator($this->user);

            $Resource->setTmpId($NoteElement->ressource_id);
            
            if(0){
                $ndt = new \Datetime('now');
            
            }else{
                $ndt = new \Datetime($NoteElement->ressource_timestamp);
            }

           
            $Resource->setUpdateAPP($ndt->format("Y-m-d H:i:s.u"));

            $this->em->persist($Resource);
            $this->em->flush();



            return $Resource;


    }


    private function storeItem($NoteElement,$Resource){


                    //j'attaque le traitement de la ressource
            if($NoteElement->item_id === false){

                $Item = new Items();
                $Item->setCreator($this->user);

            }elseif(substr($NoteElement->item_id,0,3) == "tmp"){

               
                $ItemList = $this->em->getRepository('AppBundle:Items')->findBy(array('tmpId' => $NoteElement->item_id));

        
                if(!$ItemList){

                
                        $Item = new Items();
                        $Item->setCreator($this->user);
                        $Item->setTmpId($NoteElement->item_id);

                 }else{
                

                    $Item = $ItemList[0];
     
                 }

     
            }else{

                $Item = $this->em->getRepository('AppBundle:Items')->find($NoteElement->item_id);
            
            }


            $Item->setResource($Resource);
            $Item->setCreator($this->user);

            $Item->setTmpId($NoteElement->item_id);
            

           //  

                //résupération du type
                $ItemType = $this->em->getRepository('AppBundle:ItemsTypes')->findOneBy(array('name' => $NoteElement->item_type));

                $Item->setType($ItemType);
                

            //}

            if($NoteElement->item_type == "image"){

                $Item->setPath($NoteElement->item_path);
            
            }

            $Item->setText($NoteElement->item_text);

            if(0){
                $ndt = new \Datetime('now');
            
            }else{
                $ndt = new \Datetime($NoteElement->item_timestamp);
            }

           
            $Item->setUpdateAPP($ndt->format("Y-m-d H:i:s.u"));


            $this->em->persist($Item);
            $this->em->flush();


            return $Item;
    }




 /**
     * @Route("/pushDatas", name="api_notes_push_datas")
     * @Method("POST")
    */

    public function pushDatasAction(Request $request)
    {

/*        Errors:
        1 : Security
        2 : Data Problem
        3 : Crash*/

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";


/*        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();
 
        if(!$isAjax){

            $res->error = "1.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));

        }*/


        //accueil de la requete
        $request = Request::createFromGlobals();

        if(!$request){

            $res->error = "2.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));


        }



        //users infos
        $this->user = $this->getUser();

        if(!$this->user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }




        //SERIALIZED OBJECT
        $datas = json_decode($request->getContent());


//ok
        if(!$datas || !is_object($datas)){

            $res->error = "2.2";
            $res->msg = "Datas Corrupted";

            return new response(json_encode($res));

        }


        // j'enregistre en base ma note
        $this->em = $this->getDoctrine()->getManager();


        //on recherche siça concorde bien au niveau des id Notes / Resources / Items
        $Item = $this->em->getRepository('AppBundle:Items')->findOneBy(array('path' => $datas->item_path));


        if(!$Item){

            $res->error = "3.1";
            $res->msg = "Item Not find yet";

            return new response(json_encode($res));

        }
        //si oui alors on enregistre dans iduser/id_items/file
        //on crée l'arorescence si elle existe pas :
            $data_path = $this->container->getParameter('data_path');

            $completePath = $data_path.$this->user->getId()."/".$Item->getId();


        if (!mkdir($completePath, 0777, true)) {
             $res->error = "3.2";
            $res->msg = "Mkdir failed";

            return new response(json_encode($res));
        }

        $base_to_php = explode(',', $datas->datas);
        // the 2nd item in the base_to_php array contains the content of the image
        $Mydata = base64_decode($base_to_php[1]);


        file_put_contents($completePath."/".$datas->item_path, $Mydata);

        $manager = new ImageManager();
        $IMimage = $manager->make($completePath."/".$datas->item_path)->resize(300, 200);



            $response = new \stdClass();
            $response->item_id = $Item->getId();
            $response->item_tmpId = $datas->item_id;
            $response->item_path = $datas->item_path;
            $response->timestamp = $datas->timestamp;
            $response->type = $datas->item_type;
            $response->call = "pushDatas";
            $response->note_id = $datas->note_id;
            $response->ressource_id = $datas->ressource_id;
            $response->file_exist = file_exists ($completePath."/".$datas->item_path);
            //$response->picture = base64_encode($IMimage->response('jpg', 70));


            $res->error = "0";
            $res->data = $response;

             $MyResponse = new response(json_encode($res));
            $MyResponse->headers->set('Content-Type', 'application/json');

            return $MyResponse;


    }








  /**
     * @Route("/get-sync", name="api_notes_get_sync")
     * @Method("POST")
    */

    public function getSyncAction(Request $request)
    {

/*        Errors:
        1 : Security
        2 : Data Problem
        3 : Crash*/

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";


/*        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();
 
        if(!$isAjax){

            $res->error = "1.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));

        }*/


        //accueil de la requete
        $request = Request::createFromGlobals();

        if(!$request){

            $res->error = "2.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));


        }



        //users infos
        $this->user = $this->getUser();

        if(!$this->user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }




        //SERIALIZED OBJECT
        $datas = json_decode($request->getContent());


//ok
        if(!$datas || !is_object($datas)){

            $res->error = "2.2";
            $res->msg = "Datas Corrupted";

            return new response(json_encode($res));

        }


        // j'enregistre en base ma note
        $this->em = $this->getDoctrine()->getManager();

        $finalArray = array();


        if($datas->scope == 'all'){


            $RAW_ITEMS_SELECT = 'SELECT Items.id            AS item_id,
                                         ItemsTypes.name      AS item_type,
                                         Items.unit          AS item_unit,
                                         Items.text          AS item_text,
                                         Items.value         AS item_value,
                                         Items.path          AS item_path,
                                         Items.tmpId         AS item_tmpId,
                                         Items.updateApp     AS item_timestamp,
                                         Resources.id        AS ressource_id,
                                         Resources.title     AS ressource_title,
                                         Resources.updateAPP AS ressource_timestamp,
                                         Resources.tmpId     AS ressource_tmpId,
                                         Notes.id            AS note_id,
                                         Notes.Name          AS note_title,
                                         Notes.updateAPP     AS note_timestamp,
                                         Notes.tmpId         AS note_tmpId

                                  FROM Items
                                  LEFT JOIN Resources ON (Items.resource = Resources.id)
                                  LEFT JOIN Notes ON (Resources.note = Notes.id)
                                  LEFT JOIN ItemsTypes ON (Items.type = ItemsTypes.id)
                                  ';

            $RAW_ITEMS_COND = 'WHERE Items.creator = "'. $this->user->getId().'"';

            $RAW_ITEMS =  $RAW_ITEMS_SELECT.$RAW_ITEMS_COND;                  

            $statement = $this->em->getConnection()->prepare($RAW_ITEMS);
            $statement->execute();

            $resultItems = $statement->fetchAll();

            foreach($resultItems as $eachItem){
              $eachItem['scope'] = "item";
              array_push($finalArray,$eachItem);
            }




            $RAW_RESSOURCES_SELECT = 'SELECT Resources.id        AS ressource_id,
                                     Resources.title     AS ressource_title,
                                     Resources.updateAPP AS ressource_timestamp,
                                     Resources.tmpId     AS ressource_tmpId,
                                     Notes.id            AS note_id,
                                     Notes.Name          AS note_title,
                                     Notes.updateAPP     AS note_timestamp,
                                     Notes.tmpId         AS note_tmpId
                              FROM Resources
                              LEFT JOIN Notes ON (Resources.note = Notes.id)
                              ';

            $RAW_RESSOURCES_COND = 'WHERE Resources.id NOT IN (SELECT resource FROM Items '.$RAW_ITEMS_COND.')
                                    AND Resources.creator = "'. $this->user->getId().'"';

            $RAW_RESSOURCES = $RAW_RESSOURCES_SELECT.$RAW_RESSOURCES_COND;

            $statement = $this->em->getConnection()->prepare($RAW_RESSOURCES);
            $statement->execute();

            $resultResources = $statement->fetchAll();

            foreach($resultResources as $eachResource){
            
              $eachResource['scope'] = "ressource";
              array_push($finalArray,$eachResource);
            
            }




            $RAW_NOTES = 'SELECT Notes.id            AS note_id,
                                 Notes.Name          AS note_title,
                                 Notes.updateAPP     AS note_timestamp,
                                 Notes.tmpId         AS note_tmpId
                          FROM Notes
                          WHERE id NOT IN (SELECT note FROM Resources '.$RAW_RESSOURCES_COND.')
                          AND Notes.creator = "'. $this->user->getId().'"
                          ';

            $statement = $this->em->getConnection()->prepare($RAW_NOTES);
            $statement->execute();

            $resultNotes = $statement->fetchAll();

            foreach($resultNotes as $eachNote){
            
              $eachNote['scope'] = "note";
              array_push($finalArray,$eachNote);
            
            }



        //mise en forme a finir avant de renvoyer


        }else{

                    $RAW_ITEMS_SELECT = 'SELECT Items.id            AS item_id,
                                         ItemsTypes.name      AS item_type,
                                         Items.unit          AS item_unit,
                                         Items.text          AS item_text,
                                         Items.value         AS item_value,
                                         Items.path          AS item_path,
                                         Items.updateApp     AS item_timestamp,
                                         Resources.id        AS ressource_id,
                                         Resources.title     AS ressource_title,
                                         Resources.updateAPP AS ressource_timestamp,
                                         Notes.id            AS note_id,
                                         Notes.Name          AS note_title,
                                         Notes.updateAPP     AS note_timestamp

                                  FROM Items
                                  LEFT JOIN Resources ON (Items.resource = Resources.id)
                                  LEFT JOIN Notes ON (Resources.note = Notes.id)
                                  LEFT JOIN ItemsTypes ON (Items.type = ItemsTypes.id)
                                  ';

            $RAW_ITEMS_COND = 'WHERE Items.creator = "'. $this->user->getId().'"
                               AND Items.updateApp > "'.$datas->scope.'"
                               ';

            $RAW_ITEMS =  $RAW_ITEMS_SELECT.$RAW_ITEMS_COND;                  

            $statement = $this->em->getConnection()->prepare($RAW_ITEMS);
            $statement->execute();

            $resultItems = $statement->fetchAll();

            foreach($resultItems as $eachItem){
              $eachItem['scope'] = "item";
              array_push($finalArray,$eachItem);
            }




            $RAW_RESSOURCES_SELECT = 'SELECT Resources.id        AS ressource_id,
                                     Resources.title     AS ressource_title,
                                     Resources.updateAPP AS ressource_timestamp,
                                     Notes.id            AS note_id,
                                     Notes.Name          AS note_title,
                                     Notes.updateAPP     AS note_timestamp
                              FROM Resources
                              LEFT JOIN Notes ON (Resources.note = Notes.id)
                              ';

            $RAW_RESSOURCES_COND = 'WHERE Resources.id NOT IN (SELECT resource FROM Items '.$RAW_ITEMS_COND.')
                                    AND Resources.creator = "'. $this->user->getId().'"
                                    AND Resources.updateApp > "'.$datas->scope.'"
                                    ';

            $RAW_RESSOURCES = $RAW_RESSOURCES_SELECT.$RAW_RESSOURCES_COND;

            $statement = $this->em->getConnection()->prepare($RAW_RESSOURCES);
            $statement->execute();

            $resultResources = $statement->fetchAll();

            foreach($resultResources as $eachResource){
            
              $eachResource['scope'] = "ressource";
              array_push($finalArray,$eachResource);
            
            }




            $RAW_NOTES = 'SELECT Notes.id            AS note_id,
                                 Notes.Name          AS note_title,
                                 Notes.updateAPP     AS note_timestamp
                          FROM Notes
                          WHERE id NOT IN (SELECT note FROM Resources '.$RAW_RESSOURCES_COND.')
                          AND Notes.creator = "'. $this->user->getId().'"
                          AND Notes.updateApp > "'.$datas->scope.'"
                          ';

            $statement = $this->em->getConnection()->prepare($RAW_NOTES);
            $statement->execute();

            $resultNotes = $statement->fetchAll();

            foreach($resultNotes as $eachNote){
            
              $eachNote['scope'] = "note";
              array_push($finalArray,$eachNote);
            
            }



        }
                
      




            $res->error = "0";
            $res->msg   = "SUCCESS";
            $res->data  = $finalArray;


            $MyResponse = new response(json_encode($res));
            $MyResponse->headers->set('Content-Type', 'application/json');

            return $MyResponse;



    }






}


