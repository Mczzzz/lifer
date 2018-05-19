<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Objects_infos
 *
 * @ORM\Table(name="objects_infos")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Objects_infosRepository")
 */
class Objects_infos
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
     * @ORM\Column(name="object", type="integer", nullable=false)
     */
    private $object;


    /**
     * @var string
     *
     * @ORM\Column(name="Name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="value_text", type="text", nullable=true)
     */
    private $value_text;

    /**
     * @var datetime
     *
     * @ORM\Column(name="value_datetime", type="datetime", nullable=true)
     */
    private $value_datetime;


    /**
     * @var integer
     *
     * @ORM\Column(name="value_integer", type="integer", nullable=true)
     */
    private $value_integer;


    /**
     * @var decimal
     *
     * @ORM\Column(name="value_decimal", type="decimal", precision=13, scale=3, nullable=true)
     */
    private $value_decimal;



    /**
     * @var datetime
     *
     * @ORM\Column(name="update", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     */
    private $update;


    /**
     * @var int
     *
     * @ORM\Column(name="order", type="integer", nullable=false)
     */
    private $order;


    /**
     * @var int
     *
     * @ORM\Column(name="creator", type="integer", nullable=false)
     */
    private $creator;



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
     * @return string
     */
    public function getValueText()
    {
        return $this->value_text;
    }

    /**
     * @param string $value_text
     *
     * @return self
     */
    public function setValueText($value_text)
    {
        $this->value_text = $value_text;

        return $this;
    }

    /**
     * @return datetime
     */
    public function getValueDatetime()
    {
        return $this->value_datetime;
    }

    /**
     * @param datetime $value_datetime
     *
     * @return self
     */
    public function setValueDatetime( $value_datetime)
    {
        $this->value_datetime = $value_datetime;

        return $this;
    }

    /**
     * @return integer
     */
    public function getValueInteger()
    {
        return $this->value_integer;
    }

    /**
     * @param integer $value_integer
     *
     * @return self
     */
    public function setValueInteger($value_integer)
    {
        $this->value_integer = $value_integer;

        return $this;
    }

    /**
     * @return decimal
     */
    public function getValueDecimal()
    {
        return $this->value_decimal;
    }

    /**
     * @param decimal $value_decimal
     *
     * @return self
     */
    public function setValueDecimal( $value_decimal)
    {
        $this->value_decimal = $value_decimal;

        return $this;
    }

    /**
     * @param integer $update
     *
     * @return self
     */
    public function setUpdate( $update)
    {
        $this->update = $update;

        return $this;
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

