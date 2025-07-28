<?php

$conn = null;
$conn = checkDatabaseConnection();

$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $testimonials->testimonials_aid = $_GET['id'];
    $testimonials->testimonials_name = checkIndex($data, 'testimonials_name');
    $testimonials->testimonials_position = $data['testimonials_position'];
    $testimonials->testimonials_text = $data['testimonials_text'];
    $testimonials->testimonials_updated = date("Y-m-d H:i:s");

    $query = checkUpdate($testimonials);
    returnSuccess($testimonials, 'testimonials update', $query);
}

checkEndpoint();
