<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee_management_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM employees";
$result = $conn->query($sql);

$employees = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $employees[] = $row;
    }
    echo json_encode($employees);
} else {
    echo json_encode([]);
}

$conn->close();
?>
