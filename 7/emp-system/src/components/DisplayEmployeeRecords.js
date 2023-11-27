import React from "react";

function DisplayEmployeeRecords() {
  const displayEmployeeRecords = () => {
    // Add logic to display employee records
  };

  return (
    <div className="form-section">
      <h2>Display Employee Records</h2>
      <button onClick={displayEmployeeRecords}>Display Employee Records</button>
      <div id="employeeRecords"></div>
    </div>
  );
}

export default DisplayEmployeeRecords;
