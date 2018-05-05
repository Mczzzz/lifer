<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Service\Human;

class DefaultController extends Controller
{

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
/*        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);*/

        return $this->render('home.html.twig');

    }



    /**
     * @Route("/data", name="data")
     * @Method("POST")
     */
    public function data()
    {

        $request = Request::createFromGlobals();

        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);

        $request->files->get('jpg')->move($tmpDir,$path_parts['basename']);


        return new Response('OK');

    }       




    /**
     * @Route("/human/{id}", name="human_id")
     * @Method("GET")
     */
    public function human(Human $Moi,$id)
    {

       
        $MyHuman = $Moi->infos();
        var_dump($MyHuman);


        return new Response('OK');

    }  




}
