<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Intervention\Image\ImageManager;


/**
 * Notes controller.
 *
 * @Route("api_v1/pict")
 */

class PictureController extends Controller
{

    /**
     * @Route("/{file}", name="api_get_pict")
     * @Method("GET")
    */

    public function getAction(Request $request, $file)
    {

/*        Errors:
        1 : Security
        2 : Data Problem
        3 : Crash*/

        $res = new \stdClass();
        $res->error = "";
        $res->msg = "";



        //accueil de la requete
        $request = Request::createFromGlobals();

        if(!$request){

            $res->error = "2.1";
            $res->msg = "UnAuthorized Request Method";

            return new response(json_encode($res));


        }



        //users infos
        $this->user = $this->getUser();

        if(!$this->user){

            $res->error = "1.2";
            $res->msg = "User Unknown";

            return new response(json_encode($res));

        }


        $data_path = $this->container->getParameter('data_path');

        $completePath = $data_path.$this->user->getId()."/".$file;

     
        $manager = new ImageManager();
        $IMimage = $manager->make($completePath)->resize(300, 200);

        $headers = array('Content-Type'     => 'image/jpeg',
                         'Content-Disposition' => 'inline; filename="'.$file.'"');

        return new Response($IMimage, 200, $headers);


    }



}


