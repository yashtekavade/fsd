import React from "react";
import InsertEmployeeForm from ".../InsertEmployeeForm.js";
import UpdateEmployeeForm from "./UpdateEmployeeForm.js";
import DeleteEmployeeForm from "./DeleteEmployeeForm.js";
import DisplayEmployeeRecords from "./DisplayEmployeeRecords.js";

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>

      {/* Insert Employee Form */}
      <InsertEmployeeForm />

      {/* Update Employee Form */}
      <UpdateEmployeeForm />

      {/* Delete Employee Form */}
      <DeleteEmployeeForm />

      {/* Display Employee Records */}
      <DisplayEmployeeRecords />
    </div>
  );
}

export default App;
