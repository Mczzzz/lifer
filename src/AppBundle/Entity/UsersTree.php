<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos
 *
 * @ORM\Table(name="users_tree")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UsersTreeRepository")
 */
class UsersTree
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
     * @ORM\Column(name="type", type="string", columnDefinition="enum('USER', 'OBJECT')")
     */
    private $type;


    /**
     * @var int
     *
     * @ORM\Column(name="internal_id", type="integer", nullable=false)
     */
    private $internalId;


   /**
     * @var int
     *
     * @ORM\Column(name="left_id", type="integer", nullable=false)
     */
    private $leftId;


   /**
     * @var int
     *
     * @ORM\Column(name="right_id", type="integer", nullable=false)
     */
    private $rightId;


   /**
     * @var int
     *
     * @ORM\Column(name="level", type="integer", nullable=false)
     */
    private $level;


    /**
     * @var int
     *
     * @ORM\Column(name="user_id", type="integer", nullable=false)
     */
    private $userId;


    /**
     * @var string
     *
     * @ORM\Column(name="Name", type="string", length=255)
     */
    private $name;


    /**
     * @var datetime
     *
     * @ORM\Column(name="update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $update;


    /**
     * @var int
     *
     * @ORM\Column(name="parentId", type="integer", nullable=true)
     */
    private $parentId;


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
     * @return enum
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param enum $type
     *
     * @return self
     */
    public function setType(enum $type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return int
     */
    public function getInternalId()
    {
        return $this->internalId;
    }

    /**
     * @param int $internalId
     *
     * @return self
     */
    public function setInternalId($internalId)
    {
        $this->internalId = $internalId;

        return $this;
    }

    /**
     * @return int
     */
    public function getLeftId()
    {
        return $this->leftId;
    }

    /**
     * @param int $leftId
     *
     * @return self
     */
    public function setLeftId($leftId)
    {
        $this->leftId = $leftId;

        return $this;
    }

    /**
     * @return int
     */
    public function getRightId()
    {
        return $this->rightId;
    }

    /**
     * @param int $rightId
     *
     * @return self
     */
    public function setRightId($rightId)
    {
        $this->rightId = $rightId;

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
     * @return int
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     *
     * @return self
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

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
    public function setUpdate(datetime $update)
    {
        $this->update = $update;

        return $this;
    }

    /**
     * @return int
     */
    public function getParentId()
    {
        return $this->parentId;
    }

    /**
     * @param int $parentId
     *
     * @return self
     */
    public function setParentId($parentId)
    {
        $this->parentId = $parentId;

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

