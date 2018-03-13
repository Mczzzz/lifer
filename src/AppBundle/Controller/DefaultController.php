<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }


    /**
     * @Route("/data", name="data")
     * @Method("POST")
     */
    public function data()
    {
        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);


        $request->files->get('jpg')->move($tmpDir,$idFile.".zip");


    }       


}
