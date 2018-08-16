<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\Entity\Notes;

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

//ok
        if(!$datas || !is_object($datas)){

            $res->error = "2.2";
            $res->msg = "Datas Corrupted";

            return new response(json_encode($res));

        }


        // j'enregistre en base ma note
        $em = $this->getDoctrine()->getManager();



        if($datas->Note->id === false){

            $Note = new Notes();
            $Note->setCreator($user);

        }else{

            $Note = $em->getRepository('AppBundle:Notes')->find($datas->Note->id);
        
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

        



            $res->error = "0";
            $res->msg   = "SUCCESS";
            $res->datas = new \stdClass();
            $res->datas->Note = new \stdClass();
            $res->datas->Note->id = $Note->getId();

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
