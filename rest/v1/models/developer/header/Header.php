<?php

class Header
{
    public $header_aid; // olumn
    public $header_is_active; // column
    public $header_name; // column
    public $header_link; // column
    public $header_created; // column
    public $header_updated; // column

    public $connection; // variable for connection to database
    public $lastInsertedId; // when created is used to store last inserted aid

    public $tblHeader; // table

    // when this file is used run this function
    public function __construct($db)
    {
        $this->connection = $db;  // connection of database
        $this->tblHeader = 'my_app_header'; // table
    }

    // CREATING  DATA USING THIS FUNCTION
    public function create()
    {
        try {
            $sql = "insert into {$this->tblHeader} ( ";
            $sql .= "header_is_active, ";
            $sql .= "header_name, ";
            $sql .= "header_link, ";
            $sql .= "header_created, ";
            $sql .= "header_updated ) values ( ";
            $sql .= ":header_is_active, ";
            $sql .= ":header_name, ";
            $sql .= ":header_link, ";
            $sql .= ":header_created, ";
            $sql .= ":header_updated ) ";
            $query = $this->connection->prepare($sql); // to read your query
            $query->execute([
                "header_is_active" => $this->header_is_active,
                "header_name" => $this->header_name,
                "header_link" => $this->header_link,
                "header_created" => $this->header_created,
                "header_updated" => $this->header_updated,
            ]); // to run this sql
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
