<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee_management_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id)) {
    $id = $data->id;
    $sql = "DELETE FROM employees WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Employee deleted successfully']);
    } else {
        echo json_encode(['message' => 'Error deleting employee']);
    }
}

$conn->close();
?>
