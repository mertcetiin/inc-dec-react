import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const decrementCount = () => {
    setCount(count - 1)
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='show'>
      <div className='box'>
        <button className='dec' onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button className='inc' onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
