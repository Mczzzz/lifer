<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos_resources
 *
 * @ORM\Table(name="objects_infos_resources")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Objects_infos_resourcesRepository")
 */
class Objects_infos_resources
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
     * @ORM\ManyToOne(targetEntity="Objects", inversedBy="objects")
     * @ORM\JoinColumn(name="object", referencedColumnName="id")
     */
    private $object;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects_tree", inversedBy="objects_tree")
     * @ORM\JoinColumn(name="objectTree", referencedColumnName="id")
     */
    private $objectTree;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects_infos", inversedBy="objects_infos")
     * @ORM\JoinColumn(name="objectInfos", referencedColumnName="id")
     */
    private $objectInfos;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=true)
     */
    private $text;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="Objects_infos_resources_types", inversedBy="objects_infos_resources_types")
     * @ORM\JoinColumn(name="type", referencedColumnName="id")
     */
    private $type;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $tsUpdate;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="decimal", precision=13, scale=3, nullable=true)
     */
    private $value;



  

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
    public function getObject()
    {
        return $this->object;
    }

    /**
     * @param int $object
     *
     * @return self
     */
    public function setObject($object)
    {
        $this->object = $object;

        return $this;
    }

    /**
     * @return int
     */
    public function getObjectTree()
    {
        return $this->objectTree;
    }

    /**
     * @param int $objectTree
     *
     * @return self
     */
    public function setObjectTree($objectTree)
    {
        $this->objectTree = $objectTree;

        return $this;
    }

    /**
     * @return int
     */
    public function getObjectInfos()
    {
        return $this->objectInfos;
    }

    /**
     * @param int $objectInfos
     *
     * @return self
     */
    public function setObjectInfos($objectInfos)
    {
        $this->objectInfos = $objectInfos;

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
     * @return \DateTime
     */
    public function getTsUpdate()
    {
        return $this->tsUpdate;
    }

    /**
     * @param \DateTime $tsUpdate
     *
     * @return self
     */
    public function setTsUpdate(\DateTime $tsUpdate)
    {
        $this->tsUpdate = $tsUpdate;

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
}

