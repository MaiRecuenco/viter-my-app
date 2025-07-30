<?php

// check database
$conn = null;
$conn = checkDatabaseConnection();

// use models
$webServices = new WebServices($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$webServices->web_services_is_active = 1;
$webServices->web_services_name = checkIndex($data, "web_services_name"); //is required
$webServices->web_services_description = $data["web_services_description"]; // not required
$webServices->web_services_image = $data["web_services_image"];
$webServices->web_services_link = $data["web_services_link"];
$webServices->web_services_text_url = $data["web_services_text_url"];
$webServices->web_services_created = date("Y-m-d H:i:s"); //2025-07-23 08:16:23
$webServices->web_services_updated = date("Y-m-d H:i:s");

//VALIDATIONS
//Validation 1 - next->core->functions.php
isNameExist($webServices, $webServices->web_services_name);


$query = checkCreate($webServices);
returnSuccess($webServices, "web services create", $query);
