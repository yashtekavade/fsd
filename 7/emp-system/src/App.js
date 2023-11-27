const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("YOUR_MONGODB_CONNECTION_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Mongoose model
const Employee = mongoose.model("Employee", {
  employeeName: String,
  employeeID: String,
  departmentName: String,
  phoneNumber: String,
  joiningDate: Date,
});

// Set up routes
app.post("/saveData", (req, res) => {
  const { employeeName, employeeID, departmentName, phoneNumber, joiningDate } =
    req.body;

  // Create a new Employee instance
  const newEmployee = new Employee({
    employeeName,
    employeeID,
    departmentName,
    phoneNumber,
    joiningDate,
  });

  // Save to MongoDB
  newEmployee.save((err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send("Employee data saved successfully!");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
