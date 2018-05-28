<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Objects;

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
     * @Route("/children", name="children")
     */
    public function getChildrenAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $objects = $em->getRepository('AppBundle:Objects')->findAll();


        $test = array();

        foreach($objects as $object){

            $res = new \stdClass();
            $res->id = $object->getId();
            $res->parent = ($object->getContainerIn()->getId() != 2)? $object->getContainerIn()->getId() : "#";
            $res->text = $object->getName();
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }

}
