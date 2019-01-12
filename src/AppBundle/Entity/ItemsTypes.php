<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * 
 * @ORM\Entity
 * @ORM\Table(name="ItemsTypes")
 * 
 */
class ItemsTypes
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
     * @var string
     *
     * @ORM\Column(name="Name", type="string", length=255, unique=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="Picto", type="string", length=255, unique=false, nullable=true)
     */
    private $picto;


    /**
     * @var boolean
     *
     * @ORM\Column(name="Enable", type="boolean", nullable=true)
     */
    private $enable;


    /**
     * @var string
     *
     * @ORM\Column(name="Color", type="string", length=255, unique=false, nullable=true)
     */
    private $color;



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
     * @return string
     */
    public function getPicto()
    {
        return $this->picto;
    }

    /**
     * @param string $picto
     *
     * @return self
     */
    public function setPicto($picto)
    {
        $this->picto = $picto;

        return $this;
    }

    /**
     * @return boolean
     */
    public function isEnable()
    {
        return $this->enable;
    }

    /**
     * @param boolean $enable
     *
     * @return self
     */
    public function setEnable($enable)
    {
        $this->enable = $enable;

        return $this;
    }

    /**
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @param string $color
     *
     * @return self
     */
    public function setColor($color)
    {
        $this->color = $color;

        return $this;
    }
}

