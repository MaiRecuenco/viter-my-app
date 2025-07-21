<?php
//check database connection
$conn = null;
$conn = checkDatabaseConnection();
//use models
$webServices = new WebServices($conn);

// if(array_key_exists('id', $_GET)){
//     $webServices->
// }

if(empty($_GET)){
    $query = checkReadAll($webServices);
    http_response_code(200);
    getQueriedData($query);
}
