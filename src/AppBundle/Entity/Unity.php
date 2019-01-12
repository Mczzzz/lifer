<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Unity
 *
 * @ORM\Table(name="Unity")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UnityRepository")
 */
class Unity
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
     * @ORM\Column(name="symbol", type="string", length=255, unique=true)
     */
    private $symbol;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=true)
     */
    private $country;


    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="UnityType", inversedBy="unity")
     * @ORM\JoinColumn(name="unityType", referencedColumnName="id")
     */
    private $unityType;



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
     * Set symbol
     *
     * @param string $symbol
     *
     * @return Unity
     */
    public function setSymbol($symbol)
    {
        $this->symbol = $symbol;

        return $this;
    }

    /**
     * Get symbol
     *
     * @return string
     */
    public function getSymbol()
    {
        return $this->symbol;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Unity
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set country
     *
     * @param string $country
     *
     * @return Unity
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }





    /**
     * @return int
     */
    public function getUnityType()
    {
        return $this->unityType;
    }

    /**
     * @param int $unityType
     *
     * @return self
     */
    public function setUnityType($unityType)
    {
        $this->unityType = $unityType;

        return $this;
    }
}

