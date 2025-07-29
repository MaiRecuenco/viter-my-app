<?php

$conn = null;
$conn = checkDatabaseConnection();

$contact = new Contact($conn);

if (empty($_GET)) {
    $query = checkReadAll($contact);
    http_response_code(200);
    getQueriedData($query);
}
