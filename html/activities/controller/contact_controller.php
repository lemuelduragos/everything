<?php
require_once '../model/connection.php';
include '../model/contact.php';
$conn = new DatabaseConnection();
$cont = new Contact();
$cont.addContact('', 'Lemuel', '09222370813');
?>