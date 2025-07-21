<?php

class WebServices
{
    public $web_services_aid;
    public $web_services_is_active;
    public $web_services_name;
    public $web_services_description;
    public $web_services_image;
    public $web_services_link;
    public $web_services_url;
    public $web_services_created;
    public $web_services_updated;

    public $connection;

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
}
