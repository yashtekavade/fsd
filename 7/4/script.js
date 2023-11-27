function validateForm(action) {
  // Get form fields based on the action
  var employeeName = document.forms[`${action}Form`].elements["employee_name"];
  var employeeID = document.forms[`${action}Form`].elements["employee_id"];
  var departmentName =
    document.forms[`${action}Form`].elements["department_name"];
  var phoneNumber = document.forms[`${action}Form`].elements["phone_number"];
  var joiningDate = document.forms[`${action}Form`].elements["joining_date"];

  // Check if the required fields are not empty
  if (
    !employeeName.value ||
    !employeeID.value ||
    !departmentName.value ||
    !phoneNumber.value ||
    !joiningDate.value
  ) {
    alert("All fields must be filled out");
    return false;
  }

  // You can add more specific validation rules here if needed

  return true;
}
