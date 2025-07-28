<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/testimonials/Testimonials.php';

$body = file_get_contents("php://input");
$data = json_decode($body, true);

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
