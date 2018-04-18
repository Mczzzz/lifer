<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Area
 *
 * @ORM\Table(name="area")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AreaRepository")
 */
class Area
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="fonction", type="string", length=100, nullable=true)
     */
    private $fonction;

    /**
     * @var string
     *
     * @ORM\Column(name="adressStreet", type="string", length=255, nullable=true)
     */
    private $adressStreet;

    /**
     * @var int
     *
     * @ORM\Column(name="addressCP", type="integer", nullable=true)
     */
    private $addressCP;

    /**
     * @var string
     *
     * @ORM\Column(name="addressCity", type="string", length=100, nullable=true)
     */
    private $addressCity;


    /**
     * @var int
     *
     * @ORM\Column(name="idCreator", type="integer")
     */
    private $idCreator;

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
     * Set name
     *
     * @param string $name
     *
     * @return Area
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set fonction
     *
     * @param string $fonction
     *
     * @return Area
     */
    public function setFonction($fonction)
    {
        $this->fonction = $fonction;

        return $this;
    }

    /**
     * Get fonction
     *
     * @return string
     */
    public function getFonction()
    {
        return $this->fonction;
    }

    /**
     * Set adressStreet
     *
     * @param string $adressStreet
     *
     * @return Area
     */
    public function setAdressStreet($adressStreet)
    {
        $this->adressStreet = $adressStreet;

        return $this;
    }

    /**
     * Get adressStreet
     *
     * @return string
     */
    public function getAdressStreet()
    {
        return $this->adressStreet;
    }

    /**
     * Set addressCP
     *
     * @param integer $addressCP
     *
     * @return Area
     */
    public function setAddressCP($addressCP)
    {
        $this->addressCP = $addressCP;

        return $this;
    }

    /**
     * Get addressCP
     *
     * @return int
     */
    public function getAddressCP()
    {
        return $this->addressCP;
    }

    /**
     * Set addressCity
     *
     * @param string $addressCity
     *
     * @return Area
     */
    public function setAddressCity($addressCity)
    {
        $this->addressCity = $addressCity;

        return $this;
    }

    /**
     * Get addressCity
     *
     * @return string
     */
    public function getAddressCity()
    {
        return $this->addressCity;
    }


    /**
     * Set idCreator
     *
     * @param integer $idCreator
     *
     * @return Humans
     */
    public function setIdCreator($idCreator)
    {
        $this->idCreator = $idCreator;

        return $this;
    }

    /**
     * Get idCreator
     *
     * @return int
     */
    public function getIdCreator()
    {
        return $this->idCreator;
    }





}

