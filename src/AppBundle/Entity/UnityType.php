<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UnityType
 *
 * @ORM\Table(name="UnityType")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UnityTypeRepository")
 */
class UnityType
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
     * @ORM\Column(name="name", type="string", length=50, unique=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="posix", type="string", length=10, unique=true)
     */
    private $posix;

    /**
     * @var string
     *
     * @ORM\Column(name="symbol", type="string", length=255, nullable=true)
     */
    private $symbol;


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
     * @return UnityType
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
     * Set symbol
     *
     * @param string $symbol
     *
     * @return UnityType
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
     * @return string
     */
    public function getPosix()
    {
        return $this->posix;
    }

    /**
     * @param string $posix
     *
     * @return self
     */
    public function setPosix($posix)
    {
        $this->posix = $posix;

        return $this;
    }
}

