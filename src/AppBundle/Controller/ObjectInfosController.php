<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Objects;
use AppBundle\Entity\Objects_tree;
use AppBundle\Entity\Objects_infos;
use AppBundle\Entity\Objects_infos_resources;
use AppBundle\Entity\Object_infos_resources_types;
use AppBundle\Entity\Humans;

class ObjectInfosController extends Controller
{



    /**
     * @Route("/object/infos/get/{objectId}/{leafId}", name="object_infos_get_objid_leafid")
     */
    public function getObjectInfosAction(Request $request,$objectId,$leafId)
    {

        $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find($objectId);

        if(!$objet) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }


        $parent = $em->getRepository('AppBundle:Objects_tree')->find($leafId);
        
        if(!$parent) {

             $res = new \stdClass();
                $res->error = 2;
                $res->data = "";

                return new Response(json_encode($res));

        } 


        $objects_infos = $em->getRepository('AppBundle:Objects_infos_resources')->findBy(array('object' => $objet, 'objectTree' => $parent));


        $test = array();

        foreach($objects_infos as $object){

            $res = new \stdClass();

            $res->infos = new \stdClass();
            $res->infos->id = $object->getObjectInfos()->getId();
            $res->infos->name = $object->getObjectInfos()->getName();
            $res->infos->update = $object->getObjectInfos()->getUpdate();

            $res->resources = new \stdClass();
            $res->resources->text = $object->getText();
            $res->resources->value = $object->getValue();

            $res->resources->type = new \stdClass();
            $res->resources->type->name = $object->getType()->getName();
            $res->resources->type->picto = $object->getType()->getPicto();
            
            array_push($test,$res);

        }

        return new response(json_encode($test));

    }






    /**
     * @Route("/object/infos/add", name="object_infos_add")
     * @Method("POST")
     */
    public function objectInfosAddAction(Request $request)
    {

        $request = Request::createFromGlobals();

        $objectId     = $request->request->get('ObjectId');
        $objectLeafId = $request->request->get('ObjectLeafId');
        $name = $request->request->get('titre');
        $noteId = $request->request->get('noteId');
//        $text = $request->request->get('text');         

//        $url = $request->request->get('url');
//        $text = $request->request->get('text');         

    //    $em = $this->getDoctrine()->getManager();


/*        if(strlen($url) > 0){


            $resourceType = $em->getRepository('AppBundle:Object_infos_resources_types')->find(1);

        }else if(strlen($text) > 0){


            $resourceType = $em->getRepository('AppBundle:Object_infos_resources_types')->find(2);
            $firstLine = explode("\n",$text);
            $name = $firstLine[0];
        }
*/


        $user = $this->getUser();


        $em = $this->getDoctrine()->getManager();


        $objet = $em->getRepository('AppBundle:Objects')->find($objectId);
        
        if(!$objet) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }



         if($objectLeafId > 0 ){ //a voir si on garde ce if ?????
              
            $parent = $em->getRepository('AppBundle:Objects_tree')->find($objectLeafId);
            
            if(!$parent) {

             $res = new \stdClass();
                $res->error = 2;
                $res->data = "";

                return new Response(json_encode($res));

        }       
         }


        //on insere les infos d'objects
        if($noteId == 0){

            $object_infos = new Objects_infos();
            $object_infos->setCreator($user);
        }else{

            //Objects_infos

            $object_infos = $em->getRepository('AppBundle:Objects_infos')->find($noteId);

            if(!$object_infos){

                $res = new \stdClass();
                $res->error = 2;
                $res->data = "";

                return new Response(json_encode($res));

            }


        }

        
        $object_infos->setName($name);

        $object_infos->setObject($objet);

        $object_infos->setObjectTree($parent);

        //$object_infos->setCreator($user);

        $em->persist($object_infos);

        $em->flush();


  /*      //on crée la ressource
        $object_infos_resources = new Objects_infos_resources();

        $object_infos_resources->setText($url);

        $object_infos_resources->setType($resourceType);

        $object_infos_resources->setObject($objet);

        $object_infos_resources->setObjectTree($parent);

        $object_infos_resources->setObjectInfos($object_infos);

        $em->persist($object_infos_resources);

        $em->flush();*/


        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object_infos->getId();

        return new Response(json_encode($res));


    }



    ////////////////////////////////////////
    //// API infos ressources
    ////////////////////////////////////////


    /**
     * @Route("/object/infos/resources/createUpdate", name="object_infos_resources_create_update")
     */
    public function getObjectInfosResourcesCreateUpdateAction(Request $request)
    {


        $request = Request::createFromGlobals();

        $objectId     = $request->request->get('ObjectId');
        $objectLeafId = $request->request->get('ObjectLeafId');
        $texte = $request->request->get('texte');
        $noteId = $request->request->get('noteId');
        $ResourceId = $request->request->get('resourceId');


        $em = $this->getDoctrine()->getManager();


         $object = $em->getRepository('AppBundle:Objects')->find($objectId);
        
        if(!$object) {

             $res = new \stdClass();
                $res->error = 1;
                $res->data = "";

                return new Response(json_encode($res));

        }



         if($objectLeafId > 0 ){ //a voir si on garde ce if ?????
              
            $leaf = $em->getRepository('AppBundle:Objects_tree')->find($objectLeafId);
            
            if(!$parent) {

             $res = new \stdClass();
                $res->error = 2;
                $res->data = "";

                return new Response(json_encode($res));

            }       
        }



         $note = $em->getRepository('AppBundle:Objects_infos')->find($noteId);




        if(!is_int($ResourceId)){

            $object_infos_resources = new Objects_infos_resources();
            //$object_infos->setCreator($user);
        }else{

            //Objects_infos

            $object_infos_resources = $em->getRepository('AppBundle:Objects_infos_resources')->find($ResourceId);

            if(!$object_infos_resources){

                $res = new \stdClass();
                $res->error = 2;
                $res->data = "";

                return new Response(json_encode($res));

            }


        }

        
        $object_infos_resources->setText($texte);

        $object_infos_resources->setObject($object);

        $object_infos_resources->setObjectTree($leaf);

        $object_infos_resources->setObjectInfos($note);
        //$object_infos->setCreator($user);

        $em->persist($object_infos_resources);

        $em->flush();


        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object_infos_resources->getId();

        return new Response(json_encode($res));



    }





     /**
     * @Route("/object/infos/resources/types", name="object_infos_resources_type")
     */
    public function getObjectInfosResourcesTypeAction(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $resourcesTypes = $em->getRepository('AppBundle:Object_infos_resources_types')->findBy(array('enable' => true));
        if(!$resourcesTypes) return new Response("Pas d'objet ya un truc chelou dans le tree");


           $test = array();

        foreach($resourcesTypes as $types){

            $res = new \stdClass();
            $res->id = $types->getId();
            $res->name = $types->getName();
            $res->picto = $types->getPicto();
            $res->color = $types->getColor();

            array_push($test,$res);

        }

        return new response(json_encode($test));

    }

}
