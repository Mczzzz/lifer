<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Objects_tree;

/**
 * Objects_tree controller.
 *
 * @Route("objects_tree")
 */
class Objects_treeController extends Controller
{
    /**
     * Lists all objects_tree entities.
     *
     * @Route("/", name="objects_tree_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $objects_trees = $em->getRepository('AppBundle:Objects_tree')->findAll();

        return $this->render('objects_tree/index.html.twig', array(
            'objects_trees' => $objects_trees,
        ));
    }

    /**
     * Creates a new objects_tree entity.
     *
     * @Route("/new", name="objects_tree_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $objects_tree = new Objects_tree();
        $form = $this->createForm('AppBundle\Form\Objects_treeType', $objects_tree);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $ndt = new \Datetime('now');
            $objects_tree->setUpdate($ndt);
            $objects_tree->setCreator($this->getUser());
            $em->persist($objects_tree);
            $em->flush();

            return $this->redirectToRoute('objects_tree_show', array('id' => $objects_tree->getId()));
        }

        return $this->render('objects_tree/new.html.twig', array(
            'objects_tree' => $objects_tree,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a objects_tree entity.
     *
     * @Route("/{id}", name="objects_tree_show")
     * @Method("GET")
     */
    public function showAction(Objects_tree $objects_tree)
    {
        $deleteForm = $this->createDeleteForm($objects_tree);

        return $this->render('objects_tree/show.html.twig', array(
            'objects_tree' => $objects_tree,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing objects_tree entity.
     *
     * @Route("/{id}/edit", name="objects_tree_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Objects_tree $objects_tree)
    {
        $deleteForm = $this->createDeleteForm($objects_tree);
        $editForm = $this->createForm('AppBundle\Form\Objects_treeType', $objects_tree);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('objects_tree_edit', array('id' => $objects_tree->getId()));
        }

        return $this->render('objects_tree/edit.html.twig', array(
            'objects_tree' => $objects_tree,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a objects_tree entity.
     *
     * @Route("/{id}", name="objects_tree_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Objects_tree $objects_tree)
    {
        $form = $this->createDeleteForm($objects_tree);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($objects_tree);
            $em->flush();
        }

        return $this->redirectToRoute('objects_tree_index');
    }

    /**
     * Creates a form to delete a objects_tree entity.
     *
     * @param Objects_tree $objects_tree The objects_tree entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Objects_tree $objects_tree)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('objects_tree_delete', array('id' => $objects_tree->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }


    //TODO get structure tree of an object
    //send json

    /**
     * @Route("/get-tree/{id}", name="get-tree_id")
     * @Method("GET")
     */
    public function getObjectTree($id)
    {
         $entityManager = $this->getDoctrine()->getManager();
         $ObjTree = $entityManager->getRepository(Objects_tree::class)->findBy(array('object'=> $id),array('parent' => 'ASC'));
         $result = new \stdClass();

     $ObjectStruct = array();

	 foreach($ObjTree as $Tree){

        $ObjectStruct[$Tree->getId()] = array();
        $ObjectStruct[$Tree->getId()]['Name']  = $Tree->getName();
        
        $ObjectStruct[$Tree->getId()]['Childs'] = array();
        $ObjectStruct[$Tree->getId()]['Parents'] = array(); 

        //je retrouve tous mes parents
        //j'en deduis mon level
        if($Tree->getParent() == null){

        $ObjectStruct[$Tree->getId()]['Level'] = 0; 

        }else{

            $parent = $Tree->getParent();

            while ($parent != null){

                array_push($ObjectStruct[$Tree->getId()]['Parents'],$parent->getId());

                $parent = $parent->getParent();
           
            }
                $ObjectStruct[$Tree->getId()]['Level']= count($ObjectStruct[$Tree->getId()]['Parents']);

        }


	 }


     foreach ($ObjectStruct as $NodeId => $NodeValue){


        if(count($NodeId['Parents'] > 0){

            array_push($ObjectStruct[$NodeId['Parents'][0]]['Childs'],$ObjectStruct[$NodeId]);

        }



     }

        print_r(json_encode($ObjectStruct));
        die();

        return new Response('OK');

    }  


    
}
