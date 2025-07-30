<?php

require 'Database.php';
require 'Response.php';


function checkDatabaseConnection()
{
    try {
        $conn = Database::connectDB();
        return $conn;
    } catch (PDOException $ex) {
        $response = new Response();
        $data = [];
        $data['success'] = true;
        $data['data'] = [];
        $data['count'] = 0;
        $data['type'] = 'invalid_request_error';
        $data['error'] = "Database Connection Failed.";
        $response->setData($data);
        $response->send();
        exit;
    }
};

function returnError($msg)
{
    $response = new Response();
    $data = [];
    $data['success'] = true;
    $data['data'] = [];
    $data['count'] = 0;
    $data['message'] = $msg;
    $response->setData($data);
    $response->send();
    exit;
}

function checkEndpoint()
{
    $response = new Response();
    $response->setSuccess(false);
    $error = [];
    $error['success'] = false;
    $error['code'] = '404';
    $error['error'] = 'Endpoint not found';
    $response->setData($error);
    $response->send();
    exit;
}

function invalidInput()
{
    $response = new Response();
    $response->setSuccess(false);
    $error = [];
    $error['success'] = false;
    $error['code'] = '404';
    $error['error'] = 'Invalid input.';
    $response->setData($error);
    $response->send();
    exit;
}

function checkPayload($jsonData)
{
    if (empty($jsonData) || $jsonData === null) {
        invalidInput();
    }
}
function checkIndex($jsonData, $index)
{
    if (!isset($jsonData[$index]) || $jsonData[$index] === '') {
        invalidInput();
    }
    return trim($jsonData[$index]);
}

function returnSuccess($model, $name, $query, $data = '')
{
    $response = new response();
    $returnData = [];
    $returnData['data'] = [$data];
    $returnData['count'] = $query->rowCount();
    $returnData["{$name} ID"] = $model->lastInsertedId;
    $returnData['success'] = true;
    $response->setData($returnData);
    $response->send();
    exit;
}

function checkCreate($models)
{

    $query = $models->create();
    checkQuery($query, "There's something wrong with models. (create)");
    return $query;
}

// update 12 - add checkUpdate func (next->models-dev-web-sevices-WebServices.php)
function checkUpdate($models)
{
    $query = $models->update();
    checkQuery($query, "There's something wrong with models. (update)");
    return $query;
}

function getResultData($query)
{
    $data = $query->fetchAll();
    return $data;
}

function getQueriedData($query)
{
    $response = new Response();
    $data = [];
    $data['success'] = true;
    $data['data'] = getResultData($query);
    $data['count'] = $query->rowCount();
    $data['dateNow'] = date('Y-m-d');
    $response->setData($data);
    $response->send();
    exit;
}

function checkQuery($query, $msg)
{
    //IF QUERY IS FALSE THEN DO THIS CODE
    if (!$query) {
        $response = new Response();
        $data = [];
        $data['success'] = true;
        $data['error'] = $msg;
        $data['count'] = 0;
        $data['type'] = 'invalid_request_error';
        $data['dateNow'] = date('Y-m-d');
        $response->setData($data);
        $response->send();
        exit;
    }
}

//delete 7
function checkId($id)
{
    $response = new Response();
    if ($id == '' || !is_numeric($id)) {
        $response->setSuccess(false);
        $error = [];
        $error['code'] = '400';
        $error['error'] = 'ID cannot be blank or must be numeric';
        $error['success'] = false;
        $response->setData($error);
        $response->send();
        exit;
    }
}
//delete 8 next(->models->dev->web-services->WebServices.php)
function checkDelete($model)
{
    $query = $model->delete();
    checkQuery($query, "There's something wrong with models (delete)");
    return $query;
}


function sendResponse($result)
{
    $response = new Response();
    $response->setSuccess(true);
    $response->setStatusCode(20);
    $response->setData($result);
    $response->send();
}

function checkReadAll($object)
{
    $query = $object->readAll();
    checkQuery($query, "There's something wrong with models.");
    return $query;
}

//Validation 2 next->models->WebServices.php
function checkExistence($count, $msg = '')
{
    if ($count > 0) {
        $response = new Response();
        $error = [];
        $response->setSuccess(false);
        $error['error'] = $msg;
        $response->setData($error);
        $response->send();
        exit;
    }
}

function isNameExist($models, $name)
{
    $query = $models->checkName();
    $count = $query->rowCount();
    checkExistence($count, "{$name} already exist.");
}


//Validation 4 next->controllers->dev->web-services->update.php
function compareName($models, $name_old, $name)
{
    if (strtolower($name_old) != strtolower($name)) {
        isNameExist($models, $name);
    }
}

//Validation for Email
function isEmailExist($models, $email)
{
    $query = $models->checkEmail();
    $count = $query->rowCount();
    checkExistence($count, "{$email} already exist.");
}

function compareEmail($models, $email_old, $email)
{
    if (strtolower($email_old) != strtolower($email)) {
        isNameExist($models, $email);
    }
}




// $conn = null;
// $conn = checkDatabaseConnection();

// $test = new Test($conn);

// $query = checkReadAll($test);
// getQueriedData($query);
