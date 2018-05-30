<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Objects;
use AppBundle\Entity\Humans;

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
            $res->type = "default";
            
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


    /**
     * @Route("/node/add", name="node_add")
     * @Method("POST")
     */
    public function nodeAddAction(Request $request)
    {

        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');        

        $user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


        $parent = $em->getRepository('AppBundle:Objects')->find($parent);
        if(!$parent) return new Response("Pas de parents truc chelou");

       $human = $em->getRepository('AppBundle:Humans')->findOneBy(array('idLifer' => $user->getId()));
        if(!$human) return new Response("Pas d'humain truc chelou");

         


        $object = new Objects();
        $object->setName($node);

        $object->setOwner($human);
        $object->setUsufruct($human);
        $object->setContainerStore($parent);
        $object->setContainerIn($parent);
        $object->setCreator($user);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response($object->getId());


    }


    /**
     * @Route("/node/rename", name="node_rename")
     * @Method("POST")
     */
    public function nodeRenameAction(Request $request)
    {


        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $name = $request->request->get('name');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects')->find($node);

        if(!$object) return new Response("Pas d'objet ya un truc chelou");
         
        $object->setName($name);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response('OK');






    }





 /**
     * @Route("/node/delete", name="node_delete")
     * @Method("POST")
     */
    public function nodeDeleteAction(Request $request)
    {


        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects')->find($node);
        if(!$object) return new Response("Pas d'objet ya un truc chelou");

        $parent = $em->getRepository('AppBundle:Objects')->find($parent);
        if(!$parent) return new Response("Pas de parents truc chelou");

        //on va chercher les enfants accrochés pour les remettre au parent direct
        $childs = $em->getRepository('AppBundle:Objects')->findBy(array('containerIn' => $node));
         
        if($childs){

            foreach($childs as $child){

                $child->setContainerIn($parent);
     
                if($child->getContainerStore()->getId() == $node ) $child->setContainerStore($parent);
                $em->persist($child);
            }

            $em->flush();
        }


        //on verifie s'il y a aussi des containerStore seulement
        $childs = $em->getRepository('AppBundle:Objects')->findBy(array('containerStore' => $node));
         
        if($childs){

            foreach($childs as $child){

                $child->setContainerStore($parent);
                $em->persist($child);
            }

            $em->flush();
        }


        //maintenant on peut detruire la node sans se prendre de probleme de clef etrangere

        $em->remove($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response('OK');






    }



}
