<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Node
 *
 * @ORM\Table(name="link")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\NodeRepository")
 */
class Link
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
     * @ORM\Column(name="id_creator", type="integer")
     */
    private $idCreator;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_creation", type="datetimetz")
     */
    private $tsCreation;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_last_update", type="datetimetz", nullable=true)
     */
    private $tsLastUpdate;

    /**
     * @var string
     *
     * @ORM\Column(name="geo", type="string", length=255, nullable=true)
     */
    private $geo;

    /**
     * @var int
     *
     * @ORM\Column(name="priority", type="integer", nullable=true)
     */
    private $priority;

    /**
     * @var array
     *
     * @ORM\Column(name="assets", type="json_array", nullable=true)
     */
    private $assets;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer")
     */
    private $status;


    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;


    /**
     * @var int
     *
     * @ORM\Column(name="parent", type="integer")
     */
    private $parent;






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
     * Set idCreator
     *
     * @param integer $idCreator
     *
     * @return Node
     */
    public function setIdCreator($idCreator)
    {
        $this->idCreator = $idCreator;

        return $this;
    }

    /**
     * Get idCreator
     *
     * @return int
     */
    public function getIdCreator()
    {
        return $this->idCreator;
    }

    /**
     * Set tsCreation
     *
     * @param \DateTime $tsCreation
     *
     * @return Node
     */
    public function setTsCreation($tsCreation)
    {
        $this->tsCreation = $tsCreation;

        return $this;
    }

    /**
     * Get tsCreation
     *
     * @return \DateTime
     */
    public function getTsCreation()
    {
        return $this->tsCreation;
    }

    /**
     * Set tsLastUpdate
     *
     * @param \DateTime $tsLastUpdate
     *
     * @return Node
     */
    public function setTsLastUpdate($tsLastUpdate)
    {
        $this->tsLastUpdate = $tsLastUpdate;

        return $this;
    }

    /**
     * Get tsLastUpdate
     *
     * @return \DateTime
     */
    public function getTsLastUpdate()
    {
        return $this->tsLastUpdate;
    }

    /**
     * Set geo
     *
     * @param string $geo
     *
     * @return Node
     */
    public function setGeo($geo)
    {
        $this->geo = $geo;

        return $this;
    }

    /**
     * Get geo
     *
     * @return string
     */
    public function getGeo()
    {
        return $this->geo;
    }

    /**
     * Set priority
     *
     * @param integer $priority
     *
     * @return Node
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

        return $this;
    }

    /**
     * Get priority
     *
     * @return int
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set assets
     *
     * @param array $assets
     *
     * @return Node
     */
    public function setAssets($assets)
    {
        $this->assets = $assets;

        return $this;
    }

    /**
     * Get assets
     *
     * @return array
     */
    public function getAssets()
    {
        return $this->assets;
    }

    /**
     * Set status
     *
     * @param integer $status
     *
     * @return Node
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }



    /**
     * Set name
     *
     * @param name $name
     *
     * @return Node
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return name
     */
    public function getName()
    {
        return $this->name;
    }



    /**
     * Set parent
     *
     * @param integer $parent
     *
     * @return Node
     */
    public function setParent($parent)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return int
     */
    public function getParent()
    {
        return $this->parent;
    }


}

