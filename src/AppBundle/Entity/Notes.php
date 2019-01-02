<?php

namespace AppBundle\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;

/**
 * 
 * @ORM\Entity
 * @ORM\Table(name="Notes")
 *
 */
class Notes
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
     * @var string
     *
     * @ORM\Column(name="Name", type="string", length=255)
     */
    private $name;


    /**
     * @var datetime
     *
     * @ORM\Column(name="createBDD", type="datetime", options={"default": "CURRENT_TIMESTAMP"}) 
     */
    private $createBDD;

  
    /**
     * @var datetime
     *
     * @ORM\Column(name="updateBDD", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP", nullable=false)
     */
    private $updateBDD;


    /**
     * @var datetime
     *
     * @ORM\Column(name="updateAPP", type="datetime(3)")
     */
    private $updateAPP;



    /**
     * @var int
     *
     * @ORM\Column(name="my_order", type="integer", nullable=true)
     */
    private $order;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="notes") 
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
    public function getCreateBDD()
    {
        return $this->createBDD;
    }

    /**
     * @param datetime $createBDD
     *
     * @return self
     */
    public function setCreateBDD($createBDD)
    {
        $this->createBDD = $createBDD;

        return $this;
    }

    /**
     * @return datetime
     */
    public function getUpdateBDD()
    {
        return $this->updateBDD;
    }

    /**
     * @param datetime $updateBDD
     *
     * @return self
     */
    public function setUpdateBDD($updateBDD)
    {
        $this->updateBDD = $updateBDD;

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
}

