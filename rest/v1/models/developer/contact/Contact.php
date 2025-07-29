<?php

class Contact
{
    //columns
    public $contact_aid;
    public $contact_fullname;
    public $contact_email;
    public $contact_message;
    public $contact_created;
    public $contact_updated;

    public $connection; // variable for connection to database
    public $lastInsertedId; // when created is used, store last inserted aid

    public $tblContact; //table

    //when this file is used, run this function
    public function __construct($db)
    {
        $this->connection = $db; //connection of database
        $this->tblContact = 'my_app_contact'; //table
    }

    //creating a data using this function
    public function create()
    {
        try {
            $sql = "insert into {$this->tblContact} ( ";
            $sql .= "contact_fullname, ";
            $sql .= "contact_email, ";
            $sql .= "contact_message, ";
            $sql .= "contact_created, ";
            $sql .= "contact_updated ) values ( ";
            $sql .= ":contact_fullname, ";
            $sql .= ":contact_email, ";
            $sql .= ":contact_message, ";
            $sql .= ":contact_created, ";
            $sql .= ":contact_updated ) ";
            $query = $this->connection->prepare($sql); // to ready your query
            $query->execute([
                "contact_fullname" => $this->contact_fullname,
                "contact_email" => $this->contact_email,
                "contact_message" => $this->contact_message,
                "contact_created" => $this->contact_created,
                "contact_updated" => $this->contact_updated,
            ]); //to run this sql
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
