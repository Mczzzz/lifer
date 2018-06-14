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
        if(!$objet) return new Response("Pas d'objet ya un truc chelou dans le tree");


        $parent = $em->getRepository('AppBundle:Objects_tree')->find($leafId);
        if(!$parent) return new Response("Pas de parents truc chelou");  


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
            $res->resources->type->name = $object->getType()->getPicto();
            
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
        $url = $request->request->get('url');        

        $user = $this->getUser();


        $em = $this->getDoctrine()->getManager();


        $objet = $em->getRepository('AppBundle:Objects')->find($objectId);
        if(!$objet) return new Response("Pas d'objet ya un truc chelou dans le tree");



         if(is_bool(strpos($objectLeafId,'root_'))){ //a voir si on garde ce if ?????
              
            $parent = $em->getRepository('AppBundle:Objects_tree')->find($objectLeafId);
            if(!$parent) return new Response("Pas de parents truc chelou");       
         }


        //on insere les infos d'objects

        $object_infos = new Objects_infos();
        
        $object_infos->setName($name);

        $object_infos->setObject($objet);

        $object_infos->setObjectTree($parent);

        $object_infos->setCreator($user);

        $em->persist($object_infos);

        $em->flush();


        //on crée la ressource
        $object_infos_resources = new Objects_infos_resources();

        $object_infos_resources->setText($url);

        $object_infos_resources->setTypeId(1);

        $object_infos_resources->setObject($objet);

        $object_infos_resources->setObjectTree($parent);

        $object_infos_resources->setObjectInfos($object_infos);

        $em->persist($object_infos_resources);

        $em->flush();


        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object_infos->getId();

        return new Response(json_encode($res));


    }



    ////////////////////////////////////////
    //// API infos ressources type
    ////////////////////////////////////////


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
