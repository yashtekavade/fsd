import React, { useState } from "react";
import axios from "axios";

function InsertEmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    employeeID: "",
    departmentName: "",
    phoneNumber: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      const response = await axios.post(
        "http://localhost:5000/saveData", // Update the URL to your backend server
        employeeData
      );
      console.log(response.data);
      // Reset the form or perform any other actions after successful submission
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  return (
    <div className="form-section">
      <h2>Insert Employee Record</h2>
      <form onSubmit={handleSubmit}>
        {/* ... Your form inputs */}
        <input type="submit" value="Insert Employee" />
      </form>
    </div>
  );
}

export default InsertEmployeeForm;
