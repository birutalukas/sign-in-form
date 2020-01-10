<?php

define("DB_ADDRESS", "localhost");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "sign-in-form");

$db = new Mysqli(DB_ADDRESS, DB_USER, DB_PASS, DB_NAME);

// echo "<pre>";
// print_r($db);
// echo "</pre>";

if ($db->connect_error) {
	echo $db->connect_error;
	exit; // PHP execution stopped
} else {
	echo "DB Connected";
}
?>