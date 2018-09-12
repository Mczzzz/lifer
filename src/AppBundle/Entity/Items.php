<?php

namespace AppBundle\Entity;

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




}

