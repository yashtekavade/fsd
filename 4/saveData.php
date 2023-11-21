<?php
$conn = new mysqli("localhost", "root", "1234", "fsd4");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $employeeName = $_POST["employee_name"];
  $employeeID = $_POST["employee_id"];
  $departmentName = $_POST["department_name"];
  $phoneNumber = $_POST["phone_number"];
  $joiningDate = $_POST["joining_date"];

  $sql = "INSERT INTO employees (employee_name, employee_id, department_name, phone_number, joining_date) VALUES ('$employeeName', '$employeeID', '$departmentName', '$phoneNumber', '$joiningDate')";

  if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
?>