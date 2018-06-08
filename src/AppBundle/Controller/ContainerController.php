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

        if(!$object) return new Response("Pas d'objet ya un truc chelou");

       if(is_bool(strpos($parentId,'root_'))){
        $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
        if(!$parent) return new Response("Pas de parents truc chelou");
        }


        if(is_bool(strpos($parentId,'root_'))){
               $object->setParent($parent);

            }else{
                 $object->setParent(null);
           }

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response("c ok trop de la boulette");

    }



    /**
     * @Route("/container/add", name="node_add")
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
     * @Route("/container/rename", name="node_rename")
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

        $res = new \stdClass();
        $res->error = 0;
        return new Response($res);






    }





 /**
     * @Route("/container/delete", name="node_delete")
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

        $res = new \stdClass();
        $res->error = 0;
        return new Response($res);







    }






    /**
     * @Route("/object/tree/add", name="object_tree_add")
     * @Method("POST")
     */
    public function treeAddAction(Request $request)
    {

        $request = Request::createFromGlobals();

        $objectId = $request->request->get('object');
        $nodeText = $request->request->get('nodeText');
        $parentId = $request->request->get('parent');        

        $user = $this->getUser();




         $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find(str_replace('root_', '', $objectId));
        if(!$objet) return new Response("Pas d'objet ya un truc chelou dans le tree");




         if(is_bool(strpos($parentId,'root_'))){
              
            $parent = $em->getRepository('AppBundle:Objects_tree')->find(str_replace('root_', '', $parentId));
            if(!$parent) return new Response("Pas de parents truc chelou");       
         }


/*       $human = $em->getRepository('AppBundle:Humans')->findOneBy(array('idLifer' => $user->getId()));
        if(!$human) return new Response("Pas d'humain truc chelou");*/

        

        $object_tree = new Objects_tree();
        $object_tree->setName($nodeText);

        $object_tree->setObject($objet);

        if(is_bool(strpos($parentId,'root_'))){
              
            $object_tree->setParent($parent);
        }

        $object_tree->setCreator($user);

        $em->persist($object_tree);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response($object_tree->getId());


    }









    /**
     * @Route("/object/tree/get/{id}", name="object_tree")
     */
    public function getTreeAction(Request $request, $id)
    {

        $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find($id);
        if(!$objet) return new Response("Pas d'objet ya un truc chelou");


        $objects_tree = $em->getRepository('AppBundle:Objects_tree')->findBy(array('object' => $objet->getId()));


        $test = array();

        $res = new \stdClass();
            $res->id = "root_".$objet->getId();
            $res->parent = "#";
            $res->text = $objet->getName();
            $res->type = (strlen($objet->getType()) > 0)? $objet->getType() : "default";
            
            array_push($test,$res);


        foreach($objects_tree as $object){

            $res = new \stdClass();
            $res->id = $object->getId();
            $res->parent = (!$object->getParent())?  "root_".$objet->getId() : $object->getParent()->getId() ;
            $res->text = $object->getName();
            $res->type = (strlen($object->getType()) > 0)? $object->getType() : "default";
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }



    /**
     * @Route("/object/tree/rename", name="object_tree_rename")
     * @Method("POST")
     */
    public function ObjectTreeRenameAction(Request $request)
    {


        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $name = $request->request->get('name');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects_tree')->find($node);

        if(!$object) return new Response("Pas d'objet ya un truc chelou");
         
        $object->setName($name);

        $em->persist($object);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return new Response('OK');






    }





/**
     * @Route("/object/tree/delete", name="object_tree_delete")
     * @Method("POST")
     */
    public function objectTreeDeleteAction(Request $request)
    {


        $request = Request::createFromGlobals();
        $node = $request->request->get('node');
        $parentId = $request->request->get('parent');        

        //$user = $this->getUser();

         $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects_tree')->find($node);
        if(!$object) return new Response("Pas d'objet ya un truc chelou");

        if(is_bool(strpos($parentId,'root_'))){
            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
            if(!$parent) return new Response("Pas de parents truc chelou");
        }

        //on va chercher les enfants accrochés pour les remettre au parent direct
        $childs = $em->getRepository('AppBundle:Objects_tree')->findBy(array('parent' => $node));
         
        if($childs){

            foreach($childs as $child){

                if(is_bool(strpos($parentId,'root_'))){
                    $child->setParent($parent);
                    $em->persist($child);
                }

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
