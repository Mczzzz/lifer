<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Objects_infos;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Objects_info controller.
 *
 * @Route("objects_infos")
 */
class Objects_infosController extends Controller
{
    /**
     * Lists all objects_info entities.
     *
     * @Route("/", name="objects_infos_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $objects_infos = $em->getRepository('AppBundle:Objects_infos')->findAll();

        return $this->render('objects_infos/index.html.twig', array(
            'objects_infos' => $objects_infos,
        ));
    }

    /**
     * Creates a new objects_info entity.
     *
     * @Route("/new", name="objects_infos_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $objects_info = new Objects_info();
        $form = $this->createForm('AppBundle\Form\Objects_infosType', $objects_info);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($objects_info);
            $em->flush();

            return $this->redirectToRoute('objects_infos_show', array('id' => $objects_info->getId()));
        }

        return $this->render('objects_infos/new.html.twig', array(
            'objects_info' => $objects_info,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a objects_info entity.
     *
     * @Route("/{id}", name="objects_infos_show")
     * @Method("GET")
     */
    public function showAction(Objects_infos $objects_info)
    {
        $deleteForm = $this->createDeleteForm($objects_info);

        return $this->render('objects_infos/show.html.twig', array(
            'objects_info' => $objects_info,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing objects_info entity.
     *
     * @Route("/{id}/edit", name="objects_infos_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Objects_infos $objects_info)
    {
        $deleteForm = $this->createDeleteForm($objects_info);
        $editForm = $this->createForm('AppBundle\Form\Objects_infosType', $objects_info);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('objects_infos_edit', array('id' => $objects_info->getId()));
        }

        return $this->render('objects_infos/edit.html.twig', array(
            'objects_info' => $objects_info,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a objects_info entity.
     *
     * @Route("/{id}", name="objects_infos_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Objects_infos $objects_info)
    {
        $form = $this->createDeleteForm($objects_info);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($objects_info);
            $em->flush();
        }

        return $this->redirectToRoute('objects_infos_index');
    }

    /**
     * Creates a form to delete a objects_info entity.
     *
     * @param Objects_infos $objects_info The objects_info entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Objects_infos $objects_info)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('objects_infos_delete', array('id' => $objects_info->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
