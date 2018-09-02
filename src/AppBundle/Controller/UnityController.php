<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\Entity\UnityType;

use AppBundle\Helper\timestamp;

/**
 * Unity controller.
 *
 * @Route("api_v1/unity")
 */

class UnityController extends Controller
{

    /**
     * @Route("/get-all-types", name="api_unitys_get_all_types")
     * @Method("GET")
    */

    public function getAllTypeAction(Request $request)
    {

        // j'enregistre en base ma note
        $em = $this->getDoctrine()->getManager();

        $UnitiesTypeList = $em->getRepository('AppBundle:UnityType')->findAll();

         $res = new \stdClass();

        if(!$UnitiesTypeList){

           
            $res->error = 1;
            $res->msg = "Aucune Unité disponible";

            return new response(json_encode($res));


        }

        $res->data = array();

        $list = array();

        foreach($UnitiesTypeList as $UnityType){

        $unity = new \stdClass();

        $unity->id   = $UnityType->getId();
        $unity->name   = $UnityType->getName();
        $unity->symbol = $UnityType->getSymbol();

        array_push($list,$unity);

        }

        $res->data["Types"] = $list;

        $res->error = 0;
        $res->msg = "OK";

        return new response(json_encode($res));


    }





}


