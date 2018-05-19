<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Objects;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Object controller.
 *
 * @Route("objects")
 */
class ObjectsController extends Controller
{
    /**
     * Lists all object entities.
     *
     * @Route("/", name="objects_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $objects = $em->getRepository('AppBundle:Objects')->findAll();

        return $this->render('objects/index.html.twig', array(
            'objects' => $objects,
        ));
    }

    /**
     * Creates a new object entity.
     *
     * @Route("/new", name="objects_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $object = new Objects();
        $form = $this->createForm('AppBundle\Form\ObjectsType', $object);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($object);
            $em->flush();

            return $this->redirectToRoute('objects_show', array('id' => $object->getId()));
        }

        return $this->render('objects/new.html.twig', array(
            'object' => $object,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a object entity.
     *
     * @Route("/{id}", name="objects_show")
     * @Method("GET")
     */
    public function showAction(Objects $object)
    {
        $deleteForm = $this->createDeleteForm($object);

        return $this->render('objects/show.html.twig', array(
            'object' => $object,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing object entity.
     *
     * @Route("/{id}/edit", name="objects_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Objects $object)
    {
        $deleteForm = $this->createDeleteForm($object);
        $editForm = $this->createForm('AppBundle\Form\ObjectsType', $object);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('objects_edit', array('id' => $object->getId()));
        }

        return $this->render('objects/edit.html.twig', array(
            'object' => $object,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a object entity.
     *
     * @Route("/{id}", name="objects_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Objects $object)
    {
        $form = $this->createDeleteForm($object);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($object);
            $em->flush();
        }

        return $this->redirectToRoute('objects_index');
    }

    /**
     * Creates a form to delete a object entity.
     *
     * @param Objects $object The object entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Objects $object)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('objects_delete', array('id' => $object->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
