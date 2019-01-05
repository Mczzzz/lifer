<?php

namespace AppBundle\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
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
     * @ORM\Column(name="title", type="text", nullable=true)
     */
    private $title;


    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_update_BDD", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $tsUpdateBDD;


    /**
     * @var string
     *
     * @ORM\Column(name="updateAPP", columnDefinition="DATETIME(3)")
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
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     *
     * @return self
     */
    public function setTitle($title)
    {
        $this->title = $title;

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
     * @return string
     */
    public function getUpdateAPP()
    {
        return $this->updateAPP;
    }

    /**
     * @param string $updateAPP
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

