<?php

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Unity;
use AppBundle\Entity\UnityType;

/**
 * Object controller.
 *
 * @Route("unity")
 */
class UnityController extends Controller
{


 /**
     * Lists all object entities.
     *
     * @Route("/type", name="unity_type")
     * @Method("GET")
     */
    public function getAllUnityTypeAction()
    {
        $em = $this->getDoctrine()->getManager();

        $Unities = $em->getRepository('AppBundle:UnityType')->findAll();

		if(!$Unities) return new Response("Pas d'Unities ya un truc chelou");

		$res = array();

		foreach($Unities as $Unity){

			$res[$Unity->getId()] = $Unity->getName();

		}

		return new response(json_encode($res));

	}



 /**
     * Lists all object entities.
     *
     * @Route("/unities", name="unities")
     * @Method("GET")
     */
    public function getAllUnitiesAction()
    {
        $em = $this->getDoctrine()->getManager();

        $Unities = $em->getRepository('AppBundle:Unity')->findAll();

		if(!$Unities) return new Response("Pas d'Unities ya un truc chelou");

		$res = array();

		foreach($Unities as $Unity){

			$res[$Unity->getId()] = $Unity->getName();

		}

		return new response(json_encode($res));

	}
}