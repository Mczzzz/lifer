<?php

namespace AppBundle\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;

/**
 * 
 * @ORM\Entity
 * @ORM\Table(name="Items")
 * 
 */
class Items
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="guid")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="UUID")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="tmpId", type="string", length=255)
     */
    private $tmpId;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Resources", inversedBy="resource")
     * @ORM\JoinColumn(name="resource", referencedColumnName="id")
     */
    private $resource;



    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="ItemsTypes", inversedBy="ItemsTypes")
     * @ORM\JoinColumn(name="type", referencedColumnName="id")
     */
    private $type; //textuel //numUnit


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Items", inversedBy="Items")
     * @ORM\JoinColumn(name="ParentItem", referencedColumnName="id")
     */
    private $parentItem;



    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=true)
     */
    private $text; //texte, lien ext, lien resource, lien item




    /**
     * @var string
     *
     * @ORM\Column(name="value", type="decimal", precision=13, scale=3, nullable=true)
     */
    private $value;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Unity", inversedBy="Unity")
     * @ORM\JoinColumn(name="unit", referencedColumnName="id")
     */
    private $unit;






    /**
     * @var string
     *
     * @ORM\Column(name="path", type="text", nullable=true)
     */
    private $path;



    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_update_BDD", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $tsUpdateBDD;


    /**
     * @var datetime
     *
     * @ORM\Column(name="updateAPP", type="datetime")
     */
    private $updateAPP;



    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="creator") 
     * @ORM\JoinColumn(name="creator", referencedColumnName="id")
     */
    private $creator;





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
    public function getTmpId()
    {
        return $this->tmpId;
    }

    /**
     * @param string $tmpId
     *
     * @return self
     */
    public function setTmpId($tmpId)
    {
        $this->tmpId = $tmpId;

        return $this;
    }

    /**
     * @return int
     */
    public function getResource()
    {
        return $this->resource;
    }

    /**
     * @param int $resource
     *
     * @return self
     */
    public function setResource($resource)
    {
        $this->resource = $resource;

        return $this;
    }

    /**
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param int $type
     *
     * @return self
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return int
     */
    public function getParentItem()
    {
        return $this->parentItem;
    }

    /**
     * @param int $parentItem
     *
     * @return self
     */
    public function setParentItem($parentItem)
    {
        $this->parentItem = $parentItem;

        return $this;
    }

    /**
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param string $text
     *
     * @return self
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param string $value
     *
     * @return self
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * @return int
     */
    public function getUnit()
    {
        return $this->unit;
    }

    /**
     * @param int $unit
     *
     * @return self
     */
    public function setUnit($unit)
    {
        $this->unit = $unit;

        return $this;
    }

    /**
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @param string $path
     *
     * @return self
     */
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getTsUpdateBDD()
    {
        return $this->tsUpdateBDD;
    }

    /**
     * @param \DateTime $tsUpdateBDD
     *
     * @return self
     */
    public function setTsUpdateBDD( $tsUpdateBDD)
    {
        $this->tsUpdateBDD = $tsUpdateBDD;

        return $this;
    }

    /**
     * @return datetime
     */
    public function getUpdateAPP()
    {
        return $this->updateAPP;
    }

    /**
     * @param datetime $updateAPP
     *
     * @return self
     */
    public function setUpdateAPP( $updateAPP)
    {
        $this->updateAPP = $updateAPP;

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
}

