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

    



}

