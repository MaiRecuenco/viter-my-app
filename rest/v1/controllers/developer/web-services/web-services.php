<?php
//set http header
require '../../../core/header.php';
//use needed functions
require '../../../core/functions.php';
//use models
require '../../../models/developer/web-services/WebServices.php';
//get payload
$body = file_get_contents("php://input");
$data = json_decode($body);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
}
