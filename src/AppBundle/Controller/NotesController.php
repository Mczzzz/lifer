<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


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


        foreach ($datas as $NoteElement) {

            $this->storeElement($NoteElement);

        }


            $res->error = "0";
            $res->msg   = "SUCCESS";


            return new response(json_encode($res));


/*
# id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, birth_date
1, lifer, lifer, tlili.yasmine@gmail.com, tlili.yasmine@gmail.com, 1, , $2y$13$ms1PMDxXpt8.jY20CLnVGu3BkdDpeubKXMHWrkNzuACpR5Wp.9wtO, 2018-07-16 09:37:40, , , a:0:{}, 1981-05-25 00:00:00
2, MyLove, mylove, ax.delpierre@gmail.com, ax.delpierre@gmail.com, 1, , $2y$13$0RhTBsVuawSerODSXXwTG.ZEybGC37ZgXYu6iRgPKff3GJan/Icpq, 2018-07-25 21:10:21, , , a:0:{}, 1982-07-23 00:00:00
3, Mczzzz, mczzzz, g.bailly.akasha@gmail.com, g.bailly.akasha@gmail.com, 1, , $2y$13$UpI/NkvLIwIXMlVj4EvrH./Q5xQl4mzBO92404orJg5f1YWSaSM.C, 2018-08-18 21:48:14, , , a:0:{}, 1977-10-17 21:35:00

*/



    }




    private function storeElement($NoteElement){




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
                $ndt = new \Datetime($NoteElement->timestamp);
            }

            
            $Note->setUpdateAPP($ndt);

             $this->em->persist($Note);
             $this->em->flush();

            //log de la partie Note
            $res->datas = new \stdClass();
            $res->datas->Note = new \stdClass();
            $res->datas->Note->id = $Note->getId();







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


            $Resource->setNote($Note);
            $Resource->setCreator($this->user);

            $Resource->setTmpId(str_replace("tmp","",$NoteElement->ressource_id));
            
            //$ndtR = new \Datetime($datas->Resource->update);
            //$Resource->setUpdateAPP($ndtR);

            $this->em->persist($Resource);
            $this->em->flush();
            //


            return true;




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


            $Item->setResource($Note);
            $Item->setCreator($this->user);

            $Item->setTmpId(str_replace("tmp","",$NoteElement->ressource_id));
            
            //$ndtR = new \Datetime($datas->Resource->update);
            //$Resource->setUpdateAPP($ndtR);

            $this->em->persist($Resource);
            $this->em->flush();

            




            if($NoteElement->type == "text"){

                $Resource->setText($datas->Resource->resource);

            }


            $majResource = new \Datetime($datas->Resource->update);


            $Resource->setUpdateAPP($majResource);


            $em->persist($Resource);
            $em->flush();


            $res->datas->Resource = new \stdClass();
            $res->datas->Resource->id = $Resource->getId();




    }




}


