<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects
 *
 * @ORM\Table(name="objects")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ObjectsRepository")
 */
class Objects
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
     * @ORM\Column(name="name", type="string", length=100)
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Humans")
     * @ORM\JoinColumn(name="owner", referencedColumnName="id")
     */
    private $owner;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Humans", inversedBy="objects")
     * @ORM\JoinColumn(name="usufruct", referencedColumnName="id")
     */
    private $usufruct;



    /**
     * @var int
     *
     * @ORM\Column(name="localisation", type="integer", nullable=true)
     */
    private $localisation;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects", inversedBy="objects")
     * @ORM\JoinColumn(name="containerStore", referencedColumnName="id")
     */
    private $containerStore;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects", inversedBy="objects")
     * @ORM\JoinColumn(name="containerIn", referencedColumnName="id")
     */
    private $containerIn;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="objects") 
     * @ORM\JoinColumn(name="creator", referencedColumnName="id")
     */
    private $creator;


    /**
     * @var boolean
     *
     * @ORM\Column(name="public", type="boolean", nullable=true)
     */
    private $public;


    /**
     * @var boolean
     *
     * @ORM\Column(name="topPerso", type="boolean", nullable=true)
     */
    private $topPerso;


    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=100, nullable=true)
     */
    private $type;


    /**
     * @var boolean
     *
     * @ORM\Column(name="active", type="boolean", nullable=true)
     */
    private $active;


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
     * @return Objects
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
     * Set owner
     *
     * @param integer $owner
     *
     * @return Objects
     */
    public function setOwner($owner)
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * Get owner
     *
     * @return int
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * Set containerStore
     *
     * @param integer $containerStore
     *
     * @return Objects
     */
    public function setContainerStore($containerStore)
    {
        $this->containerStore = $containerStore;

        return $this;
    }

    /**
     * Get containerStore
     *
     * @return int
     */
    public function getContainerStore()
    {
        return $this->containerStore;
    }

    /**
     * Set containerIn
     *
     * @param integer $containerIn
     *
     * @return Objects
     */
    public function setContainerIn($containerIn)
    {
        $this->containerIn = $containerIn;

        return $this;
    }

    /**
     * Get containerIn
     *
     * @return int
     */
    public function getContainerIn()
    {
        return $this->containerIn;
    }


    /**
     * Set localisation
     *
     * @param integer $localisation
     *
     * @return Objects
     */
    public function setLocalisation($localisation)
    {
        $this->localisation = $localisation;

        return $this;
    }

    /**
     * Get localisation
     *
     * @return int
     */
    public function getLocalisation()
    {
        return $this->localisation;
    }




    /**
     * Set usufruct
     *
     * @param integer $usufruct
     *
     * @return Objects
     */
    public function setUsufruct($usufruct)
    {
        $this->usufruct = $usufruct;

        return $this;
    }

    /**
     * Get usufruct
     *
     * @return int
     */
    public function getUsufruct()
    {
        return $this->usufruct;
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





    /**
     * @return boolean
     */
    public function isPublic()
    {
        return $this->public;
    }

    /**
     * @param boolean $public
     *
     * @return self
     */
    public function setPublic($public)
    {
        $this->public = $public;

        return $this;
    }




    /**
     * @return boolean
     */
    public function isTopPerso()
    {
        return $this->topPerso;
    }

    /**
     * @param boolean $topPerso
     *
     * @return self
     */
    public function setTopPerso($topPerso)
    {
        $this->topPerso = $topPerso;

        return $this;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return self
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }
    

    /**
     * @return boolean
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @param boolean $active
     *
     * @return self
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }
}
