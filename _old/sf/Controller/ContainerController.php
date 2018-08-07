<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Objects;
use AppBundle\Entity\Objects_tree;
use AppBundle\Entity\Humans;

class ContainerController extends Controller
{


    /**
     * @Route("/container/all", name="children")
     */
    public function getContainerAllAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $objects = $em->getRepository('AppBundle:Objects')->findBy(array('creator' => $this->getUser()));


        $test = array();

        foreach($objects as $object){

            $res = new \stdClass();
            $res->id = $object->getId();
         
            $res->parent = (!is_object($object->getContainerIn()))?  "#" : $object->getContainerIn()->getId() ;
          
            $res->text = $object->getName();
            $res->type = (strlen($object->getType()) > 0)? $object->getType() : "default";
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }


    /**
     * @Route("/container/dnd", name="node_dnd")
     * @Method("POST")
     */
    public function MoveAction(Request $request)
    {
        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');

        $em = $this->getDoctrine()->getManager();

        $res = new \stdClass();
        $res->error = 0;

        $object = $em->getRepository('AppBundle:Objects')->find($node);

        if(!$object){

            $res->error = 1;
            $res->data = "No Container";
            return new Response(json_encode($res));

        }

        if($parent > 0){

            $parent = $em->getRepository('AppBundle:Objects')->find($parent);

            if(!$parent){
                $res->error = 2;
                $res->data = "Orphelin";
                return new Response(json_encode($res));
                
            }

        }else{
            $parent = null;
        }

        $object->setContainerIn($parent);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();


        return new Response(json_encode($res));


    }




    /**
     * @Route("/container/tree/dnd", name="object_tree_dnd")
     * @Method("POST")
     */
    public function objectTreeMoveAction(Request $request)
    {
        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parentId = $request->request->get('parent');

        $em = $this->getDoctrine()->getManager();

        $object = $em->getRepository('AppBundle:Objects_tree')->find($node);

        if(!$object) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }


       if($parentId > 0){

            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
            

            if(!$parent) {

                 $res = new \stdClass();
                    $res->error = 2;
                    $res->data = "";

                    return new Response(json_encode($res));

            }

        }else{

            $parent = null;

        }


        $object->setParent($parent);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response("c ok trop de la boulette");

    }



    /**
     * @Route("/container/add", name="node_add")
     * @Method("POST")
     */
    public function containerAddAction(Request $request)
    {

        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');        

        $user = $this->getUser();

         $em = $this->getDoctrine()->getManager();

         if($parent > 0){
            $parent = $em->getRepository('AppBundle:Objects')->find($parent);

           if(!$parent) {

                 $res = new \stdClass();
                    $res->error = 2;
                    $res->data = "";

                    return new Response(json_encode($res));

            }
         }else{

            $parent = null;

         }


       $human = $em->getRepository('AppBundle:Humans')->findOneBy(array('idLifer' => $user->getId()));

        if(!$human) {

                 $res = new \stdClass();
                    $res->error = 3;
                    $res->data = "";

                    return new Response(json_encode($res));

            }

         


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

        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object->getId();

        return new Response(json_encode($res));


    }


    /**
     * @Route("/container/rename", name="node_rename")
     * @Method("POST")
     */
    public function containerRenameAction(Request $request)
    {


        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $name = $request->request->get('name');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects')->find($node);

        if(!$object) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }
         
        $object->setName($name);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        $res = new \stdClass();
        $res->error = 0;

        return new Response(json_encode($res));






    }





 /**
     * @Route("/container/delete", name="node_delete")
     * @Method("POST")
     */
    public function containerDeleteAction(Request $request)
    {
        
//TODO : Que fais t'on de l'arbre interne de l'objet ?
// renvoi au parent
// chutier d'infos
// déplacement vers une autre node

        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parent = $request->request->get('parent');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects')->find($node);

        if(!$object) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }

        if($parent > 0){
            $parent = $em->getRepository('AppBundle:Objects')->find($parent);

                if(!$parent) {

                 $res = new \stdClass();
                    $res->error = 2;
                    $res->data = "";

                    return new Response(json_encode($res));

            }
         }else{
            $parent = null;
         }
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

        $res = new \stdClass();
        $res->error = 0;

        return new Response(json_encode($res));


    }


}
