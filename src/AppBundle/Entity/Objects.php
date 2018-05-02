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
     * @ORM\Column(name="owner", type="integer", nullable=true)
     */
    private $owner;


    /**
     * @var int
     *
     * @ORM\Column(name="usufruct", type="integer", nullable=true)
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
     * @ORM\Column(name="ContainerStore", type="integer", nullable=true)
     */
    private $containerStore;

    /**
     * @var int
     *
     * @ORM\Column(name="ContainerIn", type="integer", nullable=true)
     */
    private $containerIn;


    /**
     * @var int
     *
     * @ORM\Column(name="creator", type="integer", nullable=false)
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





}

