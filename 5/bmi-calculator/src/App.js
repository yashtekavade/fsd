// Import React and CSS
import React, { useState } from "react";
import "./style.css";

// Create a functional component
const App = () => {
  // State for height and weight
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // State for BMI result and message
  const [bmiResult, setBmiResult] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  // Function to handle form submission
  const calculateBMI = (e) => {
    e.preventDefault();

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
      setBmiResult("Please provide valid height and weight");
      setBmiMessage("");
    } else {
      // Calculate BMI
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      setBmiResult(bmi);

      // Determine BMI category
      if (bmi < 18.6) {
        setBmiMessage("You are underweight");
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        setBmiMessage("Normal");
      } else {
        setBmiMessage("You are overweight");
      }
    }
  };

  return (
    <div className="container">
      <h1>GitHub Account Searcher</h1>
      <div className="searchContainer">
        {/* Your GitHub search input here */}
      </div>

      <form onSubmit={calculateBMI}>
        <div className="inputs">
          <input
            type="text"
            id="height"
            placeholder="Enter Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            id="weight"
            placeholder="Enter Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="calcBtn" type="submit">
          Calculate BMI
        </button>
      </form>

      <div id="results">{bmiResult && <span>{bmiResult}</span>}</div>

      <div id="message">{bmiMessage && <p>{bmiMessage}</p>}</div>
    </div>
  );
};

export default App;
