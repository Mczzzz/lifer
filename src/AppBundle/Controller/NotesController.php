<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";

        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();
 
        if(!$isAjax){

            $res->error = "1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));

        }


        //users infos
        //$user = $this->getUser();


        //accueil de la requete
        $request = Request::createFromGlobals();

        //SERIALIZED OBJECT
        $datas = json_decode($request->getContent());

        var_dump($datas);
        die();

        
        $RequestData = $request->request->get('RequestData');

        $dataArray = json_decode($RequestData);






        //NOTE
        $noteId         = $request->request->get('noteId');

        $noteTitle      = $request->request->get('noteTitle');

        $noteAppTs      = $request->request->get('noteTs');

        //RESOURCE
        $resourceId     = $request->request->get('resourceId');

        $resourceTypeId = $request->request->get('resourceTypeId'); //obligatoire

        $resourceText   = $request->request->get('resourceText');

        //$resourceData   = $request->request->get('data');
        
/*        $value       = $request->request->get('value');

        $dateTime       = $request->request->get('dateTime');

        $unit        = $request->request->get('unit');*/




        //si pas d'id de note j'en crée une note
        //si pas de titre c'est pas grave




        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();

    }





}
