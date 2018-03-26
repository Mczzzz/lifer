<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class NodeController extends Controller
{


    /**
     * @Route("/api/node", name="api_node")
     * @Method("GET")
     */

    public function NodeManager(Request $request)
    {

        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();

        $user = $this->getUser();

        var_dump($user);
        die();


        $request = Request::createFromGlobals();

        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);

        $request->files->get('jpg')->move($tmpDir,$path_parts['basename']);


        return new Response('OK');

    }       






}
