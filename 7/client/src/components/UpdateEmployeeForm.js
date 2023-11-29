import React from "react";
import { useState } from "react";

function UpdateEmployeeForm() {
  const [updateEmployeeData, setUpdateEmployeeData] = useState({
    updateEmployeeID: "",
    updatedDepartmentName: "",
    updatedPhoneNumber: "",
  });

  const handleChange = (e) => {
    setUpdateEmployeeData({
      ...updateEmployeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="form-section">
      <h2>Update Employee Record</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="updateEmployeeID">Employee ID to Update:</label>
        <input
          type="text"
          name="updateEmployeeID"
          value={updateEmployeeData.updateEmployeeID}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="updatedDepartmentName">Updated Department Name:</label>
        <input
          type="text"
          name="updatedDepartmentName"
          value={updateEmployeeData.updatedDepartmentName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="updatedPhoneNumber">Updated Phone Number:</label>
        <input
          type="text"
          name="updatedPhoneNumber"
          value={updateEmployeeData.updatedPhoneNumber}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Update Employee" />
      </form>
    </div>
  );
}

export default UpdateEmployeeForm;
