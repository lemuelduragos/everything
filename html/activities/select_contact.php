<?php
include '../controller/contact_controller.php';

class Contact{
	function addContact($tableName, $name, $number) {
		$sqlInsert = "INSERT INTO $tableName(name)
	    VALUES ('', $name', '$number')";
	    $conn->exec($sqlInsert);
	    echo "New record created successfully";
	}
}
?>



