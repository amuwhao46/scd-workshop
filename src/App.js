import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
// Calc BMI (weight (lbs), height (inches))
  const weightInput = useRef(null);
  const heightInFeet = useRef(null);
  const heightInInches = useRef(null);
  const calcBMI = (weight, height) => {}

  const handClick = () => {
    let weight = weightInput.current?.value
    let heightFt = heightInFeet.current?.value
    let HeightIn = heightInInches.current?.value
  }

  return (
    <div>
      <h1>Calculate BMI</h1>
      <input type="number" ref={weightInput} placeholder="Weight (lbs)" />
      <div style={{display: "inline-block"}}>
        <input type="number" ref={heightInFeet} placeholder="Height (feet)" />
        <input type="number" ref={heightInInches} placeholder="Height (inches)" />
      </div>
    </div>
  );
}

export default App;
