// PHP code for handling form submissions
$employeeData = []; // This can be replaced with a database in a real-world scenario

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form validation
    $employeeName = test_input($_POST["employee_name"]);
    $employeeID = test_input($_POST["employee_id"]);
    $departmentName = test_input($_POST["department_name"]);
    $phoneNumber = test_input($_POST["phone_number"]);
    $joiningDate = test_input($_POST["joining_date"]);

    // Basic validation
    if (empty($employeeName) || empty($employeeID) || empty($departmentName) || empty($phoneNumber) || empty($joiningDate)) {
        echo "<p class='error'>All fields are required</p>";
    } else {
        // Insert employee details
        $employeeData[$employeeID] = [
            'employee_name' => $employeeName,
            'department_name' => $departmentName,
            'phone_number' => $phoneNumber,
            'joining_date' => $joiningDate
        ];

        echo "<p>Employee details added successfully!</p>";
    }
}

// Function to sanitize and validate input
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}