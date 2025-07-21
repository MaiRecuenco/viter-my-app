<?php

error_reporting(E_ALL);
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Method: PUT, POST, GET, OPTIONS, DELETE');
// GET => READ, POST => CREATE, PUT => UPDATE, DELETE=> DELETE
date_default_timezone_set('Asia/Manila');
