<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos
 *
 * @ORM\Table(name="objects_infos")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Objects_infosRepository")
 */
class Objects_infos
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
     * @ORM\Column(name="ts_update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $update;


    /**
     * @var int
     *
     * @ORM\Column(name="my_order", type="integer", nullable=true)
     */
    private $order;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="objects_infos") 
     * @ORM\JoinColumn(name="creator", referencedColumnName="id")
     */
    private $creator;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects_tree", inversedBy="objects_infos")
     * @ORM\JoinColumn(name="leaf", referencedColumnName="id")
     */
    private $leaf;



  

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return int
     */
    public function getObject()
    {
        return $this->object;
    }

    /**
     * @param int $object
     *
     * @return self
     */
    public function setObject($object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return self
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }


    /**
     * @return datetime
     */
    public function getUpdate()
    {
        return $this->update;
    }

    /**
     * @param datetime $update
     *
     * @return self
     */
    public function setUpdate($update)
    {
        $this->update = $update;

        return $this;
    }

    /**
     * @return int
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     * @param int $order
     *
     * @return self
     */
    public function setOrder($order)
    {
        $this->order = $order;

        return $this;
    }

    /**
     * @return int
     */
    public function getCreator()
    {
        return $this->creator;
    }

    /**
     * @param int $creator
     *
     * @return self
     */
    public function setCreator($creator)
    {
        $this->creator = $creator;

        return $this;
    }

    /**
     * @return int
     */
    public function getLeaf()
    {
        return $this->leaf;
    }

    /**
     * @param int $leaf
     *
     * @return self
     */
    public function setLeaf($leaf)
    {
        $this->leaf = $leaf;

        return $this;
    }
}

