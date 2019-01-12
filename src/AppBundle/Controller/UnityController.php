<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\Entity\UnityType;
use AppBundle\Entity\Unity;

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

        $unity->id     = $UnityType->getId();
        $unity->name   = $UnityType->getName();
        $unity->symbol = $UnityType->getSymbol();
        $unity->posix  = $UnityType->getPosix();

        array_push($list,$unity);

        }

        $res->data["Types"] = $list;

        $res->error = 0;
        $res->msg = "OK";

        return new response(json_encode($res));


    }




   /**
     * @Route("/get-all-unities", name="api_unitys_get_all_unities")
     * @Method("GET")
    */

    public function getAllUnitiesAction(Request $request)
    {

        // j'enregistre en base ma note
        $em = $this->getDoctrine()->getManager();

        $UnitiesList = $em->getRepository('AppBundle:Unity')->findAll();

         $res = new \stdClass();

        if(!$UnitiesList){

           
            $res->error = 1;
            $res->msg = "Aucune Unité disponible";

            return new response(json_encode($res));


        }

        $res->data = array();

        $list = array();

        foreach($UnitiesList as $UnityList){

        $unity = new \stdClass();

        $unity->id     = $UnityList->getId();
        $unity->name   = $UnityList->getDescription();
        $unity->symbol = $UnityList->getSymbol();
        $unity->type   = $UnityList->getUnityType()->getPosix();

        array_push($list,$unity);

        }

        $res->data["Unit"] = $list;

        $res->error = 0;
        $res->msg = "OK";

        return new response(json_encode($res));


    }





}


