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
     * @ORM\Column(name="objectId", type="integer")
     */
    private $objectId;

    /**
     * @var int
     *
     * @ORM\Column(name="ObjectTreeId", type="integer")
     */
    private $objectTreeId;

    /**
     * @var int
     *
     * @ORM\Column(name="ObjectInfosId", type="integer")
     */
    private $objectInfosId;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=true)
     */
    private $text;

    /**
     * @var int
     *
     * @ORM\Column(name="typeId", type="integer")
     */
    private $typeId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ts_update", type="datetimetz")
     */
    private $tsUpdate;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="decimal", precision=13, scale=3, nullable=true)
     */
    private $value;


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
     * Set objectId
     *
     * @param integer $objectId
     *
     * @return Objects_infos_resources
     */
    public function setObjectId($objectId)
    {
        $this->objectId = $objectId;

        return $this;
    }

    /**
     * Get objectId
     *
     * @return int
     */
    public function getObjectId()
    {
        return $this->objectId;
    }

    /**
     * Set objectTreeId
     *
     * @param integer $objectTreeId
     *
     * @return Objects_infos_resources
     */
    public function setObjectTreeId($objectTreeId)
    {
        $this->objectTreeId = $objectTreeId;

        return $this;
    }

    /**
     * Get objectTreeId
     *
     * @return int
     */
    public function getObjectTreeId()
    {
        return $this->objectTreeId;
    }

    /**
     * Set objectInfosId
     *
     * @param integer $objectInfosId
     *
     * @return Objects_infos_resources
     */
    public function setObjectInfosId($objectInfosId)
    {
        $this->objectInfosId = $objectInfosId;

        return $this;
    }

    /**
     * Get objectInfosId
     *
     * @return int
     */
    public function getObjectInfosId()
    {
        return $this->objectInfosId;
    }

    /**
     * Set text
     *
     * @param string $text
     *
     * @return Objects_infos_resources
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set typeId
     *
     * @param integer $typeId
     *
     * @return Objects_infos_resources
     */
    public function setTypeId($typeId)
    {
        $this->typeId = $typeId;

        return $this;
    }

    /**
     * Get typeId
     *
     * @return int
     */
    public function getTypeId()
    {
        return $this->typeId;
    }

    /**
     * Set tsUpdate
     *
     * @param \DateTime $tsUpdate
     *
     * @return Objects_infos_resources
     */
    public function setTsUpdate($tsUpdate)
    {
        $this->tsUpdate = $tsUpdate;

        return $this;
    }

    /**
     * Get tsUpdate
     *
     * @return \DateTime
     */
    public function getTsUpdate()
    {
        return $this->tsUpdate;
    }

    /**
     * Set value
     *
     * @param string $value
     *
     * @return Objects_infos_resources
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Get value
     *
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }
}

