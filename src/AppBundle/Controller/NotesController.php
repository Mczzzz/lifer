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

/*        var_dump($datas);
        var_dump($datas->Note);
        die();*/
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

             $Note = $em->getRepository('AppBundle:Notes')->findBy(array('tmpId' => $datas->Note->guid));

             if(!$Note){

                    $Note = new Notes();
                    $Note->setCreator($user);
                    $Note->setTmpId($datas->Note->guid);
             }

        }else{

            $Note = $em->getRepository('AppBundle:Notes')->find($datas->Note->guid);
        
        }




            $Note->setName($datas->Note->Title);

            if(!$datas->note->Ts){
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

            }elseif(substr($datas->Resource->guid,0,10) == "TmpCardId-"){

             $Resource = $em->getRepository('AppBundle:Resources')->findBy(array('tmpId' => $datas->Resource->guid));

             if(!$Resource){

                    $Resource = new Notes();
                    $Resource->setCreator($user);
                    $Resource->setTmpId($datas->Resource->guid);
             }

        }else{

            $Resource = $em->getRepository('AppBundle:Resources')->find($datas->Resource->guid);
        
        }


            $Resource->setNote($Note);

            //load du type
            $ResourceType = $em->getRepository('AppBundle:ResourcesTypes')->findBy(array("Name" => $datas->Resource->type));

            if($ResourceType){

                $Resource->setType($ResourceType);

            }

            




            if($datas->Resource->type == text){

                $Resource->setText($datas->Resource->resource);

            }



            $em->persist($Resource);
            $em->flush();


            $res->datas->Resource = new \stdClass();
            $res->datas->Resource->id = $Resource->getId();


            $res->error = "0";
            $res->msg   = "SUCCESS";


            return new response(json_encode($res));

        





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
