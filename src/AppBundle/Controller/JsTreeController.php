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
            $res->parent = ($object->getContainerIn()->getId() == 2 && $object->getId() == 2)?  "#" : $object->getContainerIn()->getId() ;
            $res->text = $object->getName();
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }


    /**
     * @Route("/dnd", name="dnd")
     * @Method("POST")
     */
    public function MoveAction(Request $request)
    {
        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');

        $em = $this->getDoctrine()->getManager();

        $object = $em->getRepository('AppBundle:Objects')->find($node);

        if(!$object) return new Response("Pas d'objet ya un truc chelou");


        $parent = $em->getRepository('AppBundle:Objects')->find($parent);
        if(!$parent) return new Response("Pas de parents truc chelou");

        $object->setContainerIn($parent);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response("c ok trop de la boulette");

    }
}
