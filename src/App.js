import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // useState
  const [count, setCount] = useState(0)
  const increment = () => {setCount(count + 1)}
  const decrement = () => {setCount(count - 1)}

  // useEffect
  useEffect(() => {
    console.log("Count State Change")
  }, [count])
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
