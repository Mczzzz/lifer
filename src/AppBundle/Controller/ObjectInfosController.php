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

class ObjectInfosController extends Controller
{


    /**
     * @Route("/object/infos/add", name="object_infos_add")
     * @Method("POST")
     */
    public function objectInfosAddAction(Request $request)
    {

        $request = Request::createFromGlobals();

        $objectId = $request->request->get('container');
        $parentId = $request->request->get('parent');
        $nodeText = $request->request->get('node');
                

        $user = $this->getUser();




        $em = $this->getDoctrine()->getManager();

        $objet = $em->getRepository('AppBundle:Objects')->find($objectId);
        if(!$objet) return new Response("Pas d'objet ya un truc chelou dans le tree");


         if(is_bool(strpos($parentId,'root_'))){
              
            $parent = $em->getRepository('AppBundle:Objects_tree')->find($parentId);
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


        $res = new \stdClass();
        $res->error = 0;
        $res->data = $object_tree->getId();

        return new Response(json_encode($res));


    }




}
