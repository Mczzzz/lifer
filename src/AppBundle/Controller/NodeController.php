<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Node;

class NodeController extends Controller
{


    /**
     * @Route("/api/node", name="api_node_post")
     * @Method("POST")
     */

    public function NodeManager(Request $request)
    {

        // is it an Ajax request?
        $isAjax = $request->isXmlHttpRequest();

        //users infos
        $user = $this->getUser();


        //interception de la requete
        $request = Request::createFromGlobals();
        $text = $request->request->get('text');

        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();
        $node = new Node('now');
        $node->setIdCreator($user->getId());
        $node->setTsCreation(new \DateTime());
        $node->setText($text);
        $node->setStatus(100);

        // tells Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($node);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        $NodeId = $node->getId();

        $response = new \stdClass();
        $response->status = true;
        $response->id = $NodeId;
/*
        $request = Request::createFromGlobals();

        $tmpDir = $this->getParameter('tmpDir');

        $file = $request->files->get('jpg')->getClientOriginalName();

        $path_parts = pathinfo($file);

        $request->files->get('jpg')->move($tmpDir,$path_parts['basename']);

*/
        return new Response($response);

    }       





 /**
     * @Route("/api/node", name="api_node_get")
     * @Method("GET")
     */

    public function NodeGetList(Request $request)
    {

        // is it an Ajax request?
        //$isAjax = $request->isXmlHttpRequest();

        //users infos
        $user = $this->getUser();


        //interception de la requete
       // $request = Request::createFromGlobals();
        //$text = $request->request->get('text');

        // j'enregistre en base ma note
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->clear();

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








}
