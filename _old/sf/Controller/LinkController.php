<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Link;

class LinkController extends Controller
{


    /**
     * @Route("/api/link", name="api_link_post")
     * @Method("POST")
     */

    public function LinkManager(Request $request)
    {

        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();

        //users infos
        $user = $this->getUser();


        //interception de la requete
        $request = Request::createFromGlobals();
        $text = $request->request->get('text');
        $id = $request->request->get('id');
        $parent = $request->request->get('parent');
        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();


        if($id != ""){

            $link = $entityManager->getRepository(Link::class)->find($id);
            $link->setTsLastUpdate(new \DateTime());
        }else{
            $link = new Link();
            $link->setIdCreator($user->getId());
            $link->setTsCreation(new \DateTime());
        }


        $link->setName($text);
        $link->setStatus(1);

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($link);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();



        $LinkId = $link->getId();


        $response = new \stdClass();
        $response->status = true;
        $response->id = $LinkId;
/*
        $request = Request::createFromGlobals();

        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);

        $request->files->get('jpg')->move($tmpDir,$path_parts['basename']);

*/
        return new Response(json_encode($response));

    }       





 /**
     * @Route("/api/link", name="api_link_get")
     * @Method("GET")
     */

    public function LinkGetList(Request $request)
    {

        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();

        //users infos
        $user = $this->getUser();


        //interception de la requete
       // $request = Request::createFromGlobals();
        //$text = $request->request->get('text');

        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();
        //$entityManager->clear();

        $list = $entityManager->getRepository(Node::class)->findBy(array('idCreator' => $user->getId()));

        $objResp = new \stdClass();

        foreach($list as $item){

            $objResp->{$item->getId()} = new \stdClass();
            $objResp->{$item->getId()}->text = $item->getText();

        }

        $response = new \stdClass();
        $response->status = true;
        $response->data = $objResp;
/*
        $request = Request::createFromGlobals();

        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);

        $request->files->get('jpg')->move($tmpDir,$path_parts['basename']);

*/
        return new Response(json_encode($response));

    }       



    /**
     * @Route("/api/node/{id}", name="api_one_node_get")
     * @Method("GET")
     */

    public function getOneList(Request $request, $id)
    {


        $isAjax = $request->isXmlHttpRequest();

        
        $user = $this->getUser();

        $entityManager = $this->getDoctrine()->getManager();


        $OneNode = $entityManager->getRepository(Node::class)->find($id);

        $objResp = new \stdClass();
         
        $objResp->id  = $OneNode->getId();
        $objResp->text = $OneNode->getText();




        $response = new \stdClass();
        $response->status = true;
        $response->data = $objResp;


        return new Response(json_encode($response));

    }





}
