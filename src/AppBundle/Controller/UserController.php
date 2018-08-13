<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\Entity\User;

/**
 * Notes controller.
 *
 * @Route("api_v1/user")
 */

class UserController extends Controller
{

    /**
     * @Route("/get", name="api_user_get")
     * @Method("GET")
    */

    public function getAction(Request $request)
    {

/*        Errors:
        1 : Security
        2 : Data Problem
        3 : Crash*/

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";



        //users infos
        $user = $this->getUser();


        if(!$user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }

    

        $res->error = "0";
        $res->msg   = "SUCCESS";
        
        $res->user = new \stdClass();
        $res->user->id        = $user->getId();
        $res->user->username  = $user->getUsername();
        $res->user->email     = $user->getEmail();
        $res->user->birthDate = $user->getBirthDate();

        $res->user->infos = new \stdClass();
        $res->user->infos->lastLogin = $user->getLastLogin();

        return new response(json_encode($res));


    }





}
