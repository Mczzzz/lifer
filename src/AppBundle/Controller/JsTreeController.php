<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Service\Human;

class JsTreeController extends Controller
{

    /**
     * @Route("/jstree", name="jstree")
     */
    public function indexAction(Request $request)
    {

        return $this->render('jstree.html.twig');

    }


    /**
     * @Route("/children/{id}", name="children")
     */
    public function getChildrenAction(Request $request)
    {

        $test = array();
        array_push($test, 'toto');
        $res = new \stdClass();
        $res->id = "a1";
        $res->parent = '#';
        $res->text = "coucou";
        
        array_push($test,$res);
        $res = new \stdClass();
        $res->id = "a2";
        $res->parent = "a1";
        $res->text = "guigui";
        
        array_push($test,$res);
        return new response(json_encode($test));

    }

}
