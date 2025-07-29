<?php

//import header
require '../../../core/header.php';
//import function
require '../../../core/functions.php';
//import mysql
require '../../../models/developer/contact/Contact.php';

$body = file_get_contents('php://input');
// $body->header_name;
$data = json_decode($body, true);
// $data['header_name'];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    //GET = READ
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
    //POST = CREATE
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }

    //PUT - UPDATE
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        // returnError('update');
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        //returnError('delete')
        $result = require 'delete.php';
        sendResponse($result);
        exit;
        // returnError('asd');
    }
}

checkEndpoint();
