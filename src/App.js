import { useEffect, useRef, useState } from 'react';
import './App.css';

const calcBMI = (weight, height) => (703*(weight/(height**2))).toFixed(1)

const BMICat = (bmi) => {
  if (bmi <= 18.5) {
    return "Underweight"
  } else if (bmi > 18.5 && bmi <= 25) {
    return "Normal weight"
  } else if (bmi > 25 && bmi <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

const BMIColor = (bmi) => {
  if (bmi <= 18.5) {
    return "yellow"
  } else if (bmi > 18.5 && bmi <= 25) {
    return "green"
  } else if (bmi > 25 && bmi <= 30) {
    return "yellow"
  } else {
    return "red"
  }
}

function App() {
  // useState
  const [header,setHeader] = useState("");
  // Calc BMI (weight (lbs), height (inches))
  const weightInput = useRef(null);
  const heightInFeet = useRef(null);
  const heightInInches = useRef(null);

  const handleClick = () => {
    let weight = weightInput.current?.value
    let heightFt = heightInFeet.current?.value
    let HeightIn = heightInInches.current?.value

    if (weight && heightFt && HeightIn) {
      let height = (parseFloat(heightFt) * 12) + parseFloat(HeightIn)
      let bmi = calcBMI(parseFloat(weight), height)
      setHeader(bmi)
    } else {
      alert("Missing information")
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Calculate BMI</h1>
        {header && <h3 style={{color: BMIColor(header)}}>BMI: {header}</h3>}
        {header && <p>You are {BMICat(header)}</p>}
        <input type="number" ref={weightInput} placeholder="Weight (lbs)" />
        <div style={{display: "inline-block"}}>
          <input type="number" ref={heightInFeet} placeholder="Height (feet)" />
          <input type="number" ref={heightInInches} placeholder="Height (inches)" />
        </div>
        <button onClick={handleClick}>Calculate</button>
      </header>
    </div>
  );
}

export default App;
