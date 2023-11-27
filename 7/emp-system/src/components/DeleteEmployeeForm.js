import React from "react";
import { useState } from "react";

function DeleteEmployeeForm() {
  const [deleteEmployeeID, setDeleteEmployeeID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="form-section">
      <h2>Delete Employee Record</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deleteEmployeeID">Employee ID to Delete:</label>
        <input
          type="text"
          name="deleteEmployeeID"
          value={deleteEmployeeID}
          onChange={(e) => setDeleteEmployeeID(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Delete Employee" />
      </form>
    </div>
  );
}

export default DeleteEmployeeForm;
