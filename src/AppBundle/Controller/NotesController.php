<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\Entity\Notes;
use AppBundle\Entity\Resources;
use AppBundle\Entity\ResourcesTypes;

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
        $user = $this->getUser();

        if(!$user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }




        //SERIALIZED OBJECT
        $datas = json_decode($request->getContent());

        var_dump($datas);
        die();
//ok
        if(!$datas || !is_object($datas)){

            $res->error = "2.2";
            $res->msg = "Datas Corrupted";

            return new response(json_encode($res));

        }


        // j'enregistre en base ma note
        $em = $this->getDoctrine()->getManager();



        if($datas->Note->guid === false){

            $Note = new Notes();
            $Note->setCreator($user);

        }elseif(substr($datas->Note->guid,0,3) == "tmp"){

             $NoteList = $em->getRepository('AppBundle:Notes')->findBy(array('tmpId' => $datas->Note->guid));

             if(!$NoteList){

                    $Note = new Notes();
                    $Note->setCreator($user);
                    $Note->setTmpId($datas->Note->guid);

/*                    $test = new \stdClass();
                    $test->format = 'NOW()';*/
                    $toto = new timestamp();

                    $Note->setCreateBDD('now');
             }else{

                $Note = $NoteList[0];
             }

        }else{

            $Note = $em->getRepository('AppBundle:Notes')->find($datas->Note->guid);
        
        }


            $Note->setName($datas->Note->Title);

            if(!$datas->Note->Ts){
                $ndt = new \Datetime('now');
            }else{
                $ndt = new \Datetime($datas->Note->Ts);
            }

            
            $Note->setUpdateAPP($ndt);

            $em->persist($Note);
            $em->flush();

            //log de la partie Note
            $res->datas = new \stdClass();
            $res->datas->Note = new \stdClass();
            $res->datas->Note->id = $Note->getId();





            //j'attaque le traitement de la ressource
            if($datas->Resource->guid === false){

                $Resource = new Resources();
                $Resource->setCreator($user);

            }elseif(substr($datas->Resource->guid,0,14) == "TmpResourceId-"){

                $ResourceList = $em->getRepository('AppBundle:Resources')->findBy(array('tmpId' => $datas->Resource->guid));

                if(!$ResourceList){

                        $Resource = new Resources();
                        $Resource->setCreator($user);
                        $Resource->setTmpId($datas->Resource->guid);

                 }else{
     
                    $Resource = $ResourceList[0];
     
                 }

     
            }else{

                $Resource = $em->getRepository('AppBundle:Resources')->find($datas->Resource->guid);
            
            }


            $Resource->setNote($Note);
            $Resource->setCreator($user);

            $Resource->setTmpId(str_replace("TmpResourceId-","",$datas->Resource->guid));
            
            $ndtR = new \Datetime($datas->Resource->update);
            $Resource->setUpdateAPP($ndtR);

            $em->persist($Resource);
            $em->flush();
            //






            //load du type
//TODO : mettre un unique sur le name please :)            
            $ResourceType = $em->getRepository('AppBundle:ResourcesTypes')->findBy(array("name" => $datas->Resource->type));

            if($ResourceType){

                $Resource->setType($ResourceType[0]);

            }

            




            if($datas->Resource->type == "text"){

                $Resource->setText($datas->Resource->resource);

            }


            $majResource = new \Datetime($datas->Resource->update);


            $Resource->setUpdateAPP($majResource);


            $em->persist($Resource);
            $em->flush();


            $res->datas->Resource = new \stdClass();
            $res->datas->Resource->id = $Resource->getId();


            $res->error = "0";
            $res->msg   = "SUCCESS";


            return new response(json_encode($res));

        


/*
# id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, birth_date
1, lifer, lifer, tlili.yasmine@gmail.com, tlili.yasmine@gmail.com, 1, , $2y$13$ms1PMDxXpt8.jY20CLnVGu3BkdDpeubKXMHWrkNzuACpR5Wp.9wtO, 2018-07-16 09:37:40, , , a:0:{}, 1981-05-25 00:00:00
2, MyLove, mylove, ax.delpierre@gmail.com, ax.delpierre@gmail.com, 1, , $2y$13$0RhTBsVuawSerODSXXwTG.ZEybGC37ZgXYu6iRgPKff3GJan/Icpq, 2018-07-25 21:10:21, , , a:0:{}, 1982-07-23 00:00:00
3, Mczzzz, mczzzz, g.bailly.akasha@gmail.com, g.bailly.akasha@gmail.com, 1, , $2y$13$UpI/NkvLIwIXMlVj4EvrH./Q5xQl4mzBO92404orJg5f1YWSaSM.C, 2018-08-18 21:48:14, , , a:0:{}, 1977-10-17 21:35:00

*/



/* 
        //NOTE
        $noteId         = $request->request->get('noteId');

        $noteTitle      = $request->request->get('noteTitle');

        $noteAppTs      = $request->request->get('noteTs');

        //RESOURCE
        $resourceId     = $request->request->get('resourceId');

        $resourceTypeId = $request->request->get('resourceTypeId'); //obligatoire

        $resourceText   = $request->request->get('resourceText');

        //$resourceData   = $request->request->get('data');
        
       $value       = $request->request->get('value');

        $dateTime       = $request->request->get('dateTime');

        $unit        = $request->request->get('unit');*/










    }





}


