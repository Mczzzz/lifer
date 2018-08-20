<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * 
 * @ORM\Entity
 * @ORM\Table(name="Resources")
 * 
 */
class Resources
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
     * @ORM\ManyToOne(targetEntity="Notes", inversedBy="note")
     * @ORM\JoinColumn(name="note", referencedColumnName="id")
     */
    private $note;


    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=true)
     */
    private $text;


    /**
     * @var string
     *
     * @ORM\Column(name="value", type="decimal", precision=13, scale=3, nullable=true)
     */
    private $value;


    /**
     * @var string
     *
     * @ORM\Column(name="path", type="text", nullable=true)
     */
    private $path;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="ResourcesTypes", inversedBy="resources_types")
     * @ORM\JoinColumn(name="type", referencedColumnName="id")
     */
    private $type;

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
     * @return int
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * @param int $note
     *
     * @return self
     */
    public function setNote($note)
    {
        $this->note = $note;

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
    public function setUpdateAPP(datetime $updateAPP)
    {
        $this->updateAPP = $updateAPP;

        return $this;
    }
}

