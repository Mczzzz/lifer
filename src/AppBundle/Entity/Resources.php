<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Resources
 *
 * @ORM\Table(name="Resources")
 * 
 */
class Resources
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
     * @ORM\Column(name="ts_update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $tsUpdate;






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

    
}

