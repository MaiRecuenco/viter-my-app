<?php

$conn = null;
$conn = checkDatabaseConnection();

$contact = new Contact($conn);

if (array_key_existsp('id', $_GET)) {
  $contact->contact_aid = $_GET['id'];

  checkId($contact->contact_aid);
  $query = checkDelete($contact);
  http_response_code(200);
  returnSuccess($contact, 'contact delete', $query);
}

checkEndpoint();

