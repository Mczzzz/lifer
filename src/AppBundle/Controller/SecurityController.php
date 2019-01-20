<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response;

class SecurityController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request){


    	   $res->error = "0";
        $res->msg   = "SUCCESS";
        
        $res->data = array();

        $dataList = new \stdClass();
        $dataList->id        = $user->getId();
        $dataList->username  = $user->getUsername();
        $dataList->email     = $user->getEmail();
        $dataList->birthDate = $user->getBirthDate();

        $dataList->infos = new \stdClass();
        $dataList->infos->lastLogin = $user->getLastLogin();

        $res->data["User"] = $dataList;

        
            $MyResponse = new response(json_encode($res));
            $MyResponse->headers->set('Content-Type', 'application/json');

            return $MyResponse;
   
    }
}

