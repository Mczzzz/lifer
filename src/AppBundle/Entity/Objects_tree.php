<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos
 *
 * @ORM\Table(name="objects_tree")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Objects_treeRepository")
 */
class Objects_tree
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects", inversedBy="objects")
     * @ORM\JoinColumn(name="object", referencedColumnName="id")
     */
    private $object;


    /**
     * @var string
     *
     * @ORM\Column(name="Name", type="string", length=255)
     */
    private $name;


    /**
     * @var datetime
     *
     * @ORM\Column(name="update", type="datetime")
     */
    private $update;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects_tree", inversedBy="objects_tree")
     * @ORM\JoinColumn(name="parent", referencedColumnName="id")
     */
    private $parent;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="objects_tree") 
     * @ORM\JoinColumn(name="creator", referencedColumnName="id")
     */
    private $creator;

    



    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Objects_infos
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

   
    /**
     * Set object
     *
     * @param integer $object
     *
     * @return Objects_infos
     */
    public function setObject($object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * Get object
     *
     * @return integer
     */
    public function getObject()
    {
        return $this->object;
    }



    /**
     * Set update
     *
     * @param datetime $update
     *
     * @return Updates_infos
     */
    public function setUpdate($update)
    {
        $this->update = $update;

        return $this;
    }

    /**
     * Get update
     *
     * @return datetime
     */
    public function getUpdate()
    {
        return $this->update;
    }



    /**
     * Set parent
     *
     * @param integer $parent
     *
     * @return Parents_infos
     */
    public function setParent($parent)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return integer
     */
    public function getParent()
    {
        return $this->parent;
    }


    /**
     * Set creator
     *
     * @param integer $creator
     *
     * @return Objects
     */
    public function setCreator($creator)
    {
        $this->creator = $creator;

        return $this;
    }

    /**
     * Get creator
     *
     * @return int
     */
    public function getCreator()
    {
        return $this->creator;
    }





}

