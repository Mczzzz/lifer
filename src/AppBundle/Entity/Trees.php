<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos
 *
 * @ORM\Table(name="trees")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TreesRepository")
 */
class Trees
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
     * @ORM\Column(name="level", type="integer", nullable=false)
     */
    private $level;





    /**
     * @var datetime
     *
     * @ORM\Column(name="update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $update;


   /**
     * @var int
     *
     * @ORM\Column(name="object_id", type="integer", nullable=false)
     */
    private $objectId;



   /**
     * @var int
     *
     * @ORM\Column(name="asc_top", type="integer", nullable=true)
     */
    private $ascTop;

   /**
     * @var int
     *
     * @ORM\Column(name="asc2", type="integer", nullable=true)
     */
    private $asc2;

   /**
     * @var int
     *
     * @ORM\Column(name="asc3", type="integer", nullable=true)
     */
    private $asc3;

   /**
     * @var int
     *
     * @ORM\Column(name="asc4", type="integer", nullable=true)
     */
    private $asc4;

   /**
     * @var int
     *
     * @ORM\Column(name="asc5", type="integer", nullable=true)
     */
    private $asc5;

   /**
     * @var int
     *
     * @ORM\Column(name="asc6", type="integer", nullable=true)
     */
    private $asc6;

   /**
     * @var int
     *
     * @ORM\Column(name="asc7", type="integer", nullable=true)
     */
    private $asc7;

   /**
     * @var int
     *
     * @ORM\Column(name="asc8", type="integer", nullable=true)
     */
    private $asc8;



   /**
     * @var int
     *
     * @ORM\Column(name="asc9", type="integer", nullable=true)
     */
    private $asc9;


   /**
     * @var int
     *
     * @ORM\Column(name="asc10", type="integer", nullable=true)
     */
    private $asc10;







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
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * @param int $level
     *
     * @return self
     */
    public function setLevel($level)
    {
        $this->level = $level;

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
    public function getObjectId()
    {
        return $this->objectId;
    }

    /**
     * @param int $objectId
     *
     * @return self
     */
    public function setObjectId($objectId)
    {
        $this->objectId = $objectId;

        return $this;
    }

    /**
     * @return int
     */
    public function getAscTop()
    {
        return $this->ascTop;
    }

    /**
     * @param int $ascTop
     *
     * @return self
     */
    public function setAscTop($ascTop)
    {
        $this->ascTop = $ascTop;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc2()
    {
        return $this->asc2;
    }

    /**
     * @param int $asc2
     *
     * @return self
     */
    public function setAsc2($asc2)
    {
        $this->asc2 = $asc2;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc3()
    {
        return $this->asc3;
    }

    /**
     * @param int $asc3
     *
     * @return self
     */
    public function setAsc3($asc3)
    {
        $this->asc3 = $asc3;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc4()
    {
        return $this->asc4;
    }

    /**
     * @param int $asc4
     *
     * @return self
     */
    public function setAsc4($asc4)
    {
        $this->asc4 = $asc4;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc5()
    {
        return $this->asc5;
    }

    /**
     * @param int $asc5
     *
     * @return self
     */
    public function setAsc5($asc5)
    {
        $this->asc5 = $asc5;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc6()
    {
        return $this->asc6;
    }

    /**
     * @param int $asc6
     *
     * @return self
     */
    public function setAsc6($asc6)
    {
        $this->asc6 = $asc6;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc7()
    {
        return $this->asc7;
    }

    /**
     * @param int $asc7
     *
     * @return self
     */
    public function setAsc7($asc7)
    {
        $this->asc7 = $asc7;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc8()
    {
        return $this->asc8;
    }

    /**
     * @param int $asc8
     *
     * @return self
     */
    public function setAsc8($asc8)
    {
        $this->asc8 = $asc8;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc9()
    {
        return $this->asc9;
    }

    /**
     * @param int $asc9
     *
     * @return self
     */
    public function setAsc9($asc9)
    {
        $this->asc9 = $asc9;

        return $this;
    }

    /**
     * @return int
     */
    public function getAsc10()
    {
        return $this->asc10;
    }

    /**
     * @param int $asc10
     *
     * @return self
     */
    public function setAsc10($asc10)
    {
        $this->asc10 = $asc10;

        return $this;
    }
}

