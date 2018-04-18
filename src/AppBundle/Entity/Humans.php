<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Humans
 *
 * @ORM\Table(name="humans")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\HumansRepository")
 */
class Humans
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
     * @ORM\Column(name="firstName", type="string", length=50)
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="lastName", type="string", length=50, nullable=true)
     */
    private $lastName;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="birthDate", type="datetimetz", nullable=true)
     */
    private $birthDate;

    /**
     * @var int
     *
     * @ORM\Column(name="idCreator", type="integer")
     */
    private $idCreator;

    /**
     * @var int
     *
     * @ORM\Column(name="idLifer", type="integer", nullable=true)
     */
    private $idLifer;


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
     * Set firstName
     *
     * @param string $firstName
     *
     * @return Humans
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     *
     * @return Humans
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set birthDate
     *
     * @param \DateTime $birthDate
     *
     * @return Humans
     */
    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    /**
     * Get birthDate
     *
     * @return \DateTime
     */
    public function getBirthDate()
    {
        return $this->birthDate;
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

    /**
     * Set idLifer
     *
     * @param integer $idLifer
     *
     * @return Humans
     */
    public function setIdLifer($idLifer)
    {
        $this->idLifer = $idLifer;

        return $this;
    }

    /**
     * Get idLifer
     *
     * @return int
     */
    public function getIdLifer()
    {
        return $this->idLifer;
    }
}

