<?php

$conn = null;
$conn = checkDatabaseConnection();

$header = new Header($conn);

if (empty($_GET)) {
    $query = checkReadAll($header);
    http_response_code(200);
    getQueriedData($query);
}
