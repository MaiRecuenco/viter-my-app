<?php

$conn =  null;
$conn = checkDatabaseConnection();
//use model
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    $testimonials->testimonials_aid = $_GET['id'];

    checkId($testimonials->testimonials_aid);
    $query = checkDelete($testimonials);
    http_response_code(200);
    returnSuccess($testimonials, 'testimonials delete', $query);
}

checkEndpoint();
