<?php
//update 11 

//declare db variable
$conn = null;
//use database
$conn = checkDatabaseConnection();
//use model
$webServices = new WebServices($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $webServices->web_services_aid = $_GET['id'];
    $webServices->web_services_name = checkIndex($data, 'web_services_name');
    $webServices->web_services_description = $data['web_services_description'];
    $webServices->web_services_image = $data['web_services_image'];
    $webServices->web_services_link = $data['web_services_link'];
    $webServices->web_services_text_url = $data['web_services_text_url'];
    $webServices->web_services_updated = date("Y-m-d H:i:s");

    $query = checkUpdate($webServices); // update 12 - add checkUpdate func in core -- functions.php--
    returnSuccess($webServices, 'webservices update', $query);
}

checkEndpoint();
