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

class ObjectController extends Controller
{



     /**
     * @Route("/object/tree/get/{id}", name="object_tree")
     */
    public function getTreeAction(Request $request, $id)
    {

        $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find($id);
        
        if(!$objet) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }



        $objects_tree = $em->getRepository('AppBundle:Objects_tree')->findBy(array('object' => $objet->getId()));


        $test = array();

 
        foreach($objects_tree as $object){

            $res = new \stdClass();
            $res->id = $object->getId();
            $res->parent = (!$object->getParent())?  "#" : $object->getParent()->getId() ;
            $res->text = $object->getName();
            $res->type = (strlen($object->getType()) > 0)? $object->getType() : "default";
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }




  
    /**
     * @Route("/object/tree/add", name="object_tree_add")
     * @Method("POST")
     */
    public function objectAddAction(Request $request)
    {

        $request = Request::createFromGlobals();

        $objectId = $request->request->get('container');
        $parentId = $request->request->get('parent');
        $nodeText = $request->request->get('node');
                

        $user = $this->getUser();




        $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find($objectId);
        
        if(!$objet) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }


         if($parentId > 0){
              
            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
            if(!$parent) return new Response("Pas de parents truc chelou");       
         
         }else{
         
            $parent = null;
         
         }


/*       $human = $em->getRepository('AppBundle:Humans')->findOneBy(array('idLifer' => $user->getId()));
        if(!$human) return new Response("Pas d'humain truc chelou");*/

        

        $object_tree = new Objects_tree();
        $object_tree->setName($nodeText);

        $object_tree->setObject($objet);

        
              
        $object_tree->setParent($parent);
        

        $object_tree->setCreator($user);

        $em->persist($object_tree);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();


        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object_tree->getId();

        return new Response(json_encode($res));


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

        $res = new \stdClass();
        $res->error = 0;

        return new Response(json_encode($res));






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

        if($parentId > 0){

            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
            if(!$parent) return new Response("Pas de parents truc chelou");
        
        }else{

            $parent = null;
        }

        //on va chercher les enfants accrochés pour les remettre au parent direct
        $childs = $em->getRepository('AppBundle:Objects_tree')->findBy(array('parent' => $node));
         

        if($childs){

            foreach($childs as $child){


                $child->setParent($parent);
                    

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



    /**
     * @Route("/object/tree/dnd", name="object_tree_dnd")
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

        $object = $em->getRepository('AppBundle:Objects_tree')->find($node);

        if(!$object){

            $res->error = 1;
            $res->data = "No Container";
            return new Response(json_encode($res));

        }

        if($parent > 0){

            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parent);

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

}
