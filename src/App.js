import { useState } from 'react';
import './App.css';

function App() {
  const welcome = <p>Welcome to the front-end</p>;
  const [count, setCount] = useState(0)
  const increment = () => {setCount(count + 1)}
  const decrement = () => {setCount(count - 1)}
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
