<?php

$conn = null;
$conn = checkDatabaseConnection();

$testimonials = new Testimonials($conn);

if (empty($_GET)) {
    $query = checkReadAll($testimonials);
    http_response_code(200);
    getQueriedData($query);
}
