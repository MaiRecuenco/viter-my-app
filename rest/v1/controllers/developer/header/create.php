<?php
//database variaable
$connection = null;
// connect to database and store in connection cariable
$conn = checkDatabaseConnection();

// use models
$header = new Header($conn);

// no id shall pass
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$header->header_is_active = 1;
$header->header_name = checkIndex($data, 'header_name');
$header->header_link = checkIndex($data, 'header_link');
$header->header_created = date("Y-m-d H:i:s");
$header->header_updated = date("Y-m-d H:i:s");

$query = checkCreate($header);
returnSuccess($header, 'header create', $query);
