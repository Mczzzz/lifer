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
 * @Route("notes")
 */

class NotesController extends Controller
{

    /**
     * @Route("/push", name="api_notes_push")
     * @Method("POST")
    */

    public function pushAction(Request $request)
    {

    	$res = {};

        // is it an Ajax request?
        //$isAjax = $request->isXmlHttpRequest();

        //users infos
        //$user = $this->getUser();


        //accueil de la requete
        $request = Request::createFromGlobals();
        $text = $request->request->get('text');
        $id = $request->request->get('id');
        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();

    }







    private function 


}
