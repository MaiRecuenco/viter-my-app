<?php

class WebServices
{
    public $web_services_aid;
    public $web_services_is_active;
    public $web_services_name;
    public $web_services_description;
    public $web_services_image;
    public $web_services_link;
    public $web_services_text_url;
    public $web_services_created;
    public $web_services_updated;

    public  $connection;
    public $lastInsertedId;

    public $tblWebServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebServices = "my_app_web_services";
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblWebServices} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebServices} ( ";
            $sql .= "web_services_is_active, ";
            $sql .= "web_services_name, ";
            $sql .= "web_services_description, ";
            $sql .= "web_services_image, ";
            $sql .= "web_services_link, ";
            $sql .= "web_services_text_url, ";
            $sql .= "web_services_created, ";
            $sql .= "web_services_updated ) values ( ";
            $sql .= ":web_services_is_active, ";
            $sql .= ":web_services_name, ";
            $sql .= ":web_services_description, ";
            $sql .= ":web_services_image, ";
            $sql .= ":web_services_link, ";
            $sql .= ":web_services_text_url, ";
            $sql .= ":web_services_created, ";
            $sql .= ":web_services_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "web_services_is_active" => $this->web_services_is_active,
                "web_services_name" => $this->web_services_name,
                "web_services_description" => $this->web_services_description,
                "web_services_image" => $this->web_services_image,
                "web_services_link" => $this->web_services_link,
                "web_services_text_url" => $this->web_services_text_url,
                "web_services_created" => $this->web_services_created,
                "web_services_updated" => $this->web_services_updated,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (Exception $ex) {
            returnError($ex);

            $query = false;
        }
        return $query;
    }
}
