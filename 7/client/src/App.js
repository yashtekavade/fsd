const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; // Update the port if needed

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://1234:<password>@cluster0.oahhxv2.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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
