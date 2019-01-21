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

            $response = new response(json_encode($res));
            $response->setStatusCode(401);

            return $response;

        }


        $data_path = $this->container->getParameter('data_path');

        $finalFile = str_replace("_","/",$file);

        $completePath = $data_path.$this->user->getId()."/".$finalFile;

        var_dump($completePath);
        die();

        if(!is_file($completePath)){


                $res->error = "1.2";
                $res->msg = "User Unknown";
                $res->path = $completePath;

                $response = new response(json_encode($res));
                $response->setStatusCode(404);

                return $response;


        }

     
        $manager = new ImageManager();


                $IMimage = $manager->make($completePath)->resize(300, 200)->orientate();


        $headers = array('Content-Type'     => 'image/jpeg',
                        'Content-Disposition' => 'inline; filename="'.$file.'"');

            return new Response($IMimage->response('jpg', 70), 200,$headers);
      //  return new Response($IMimage, 200, $headers);


    }



}


