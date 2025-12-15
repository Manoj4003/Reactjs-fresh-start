import React, { useState } from 'react'

export default function StudentCount() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to learn React.js");

  const increment = () => setCount(prev => prev + 1);

  const decrement = () =>
    setCount(prev => (prev > 0 ? prev - 1 : 0));

  const reset = () => setCount(0);

  const increment10 = () => setCount(prev => prev + 10);

  const decrement10 = () =>
    setCount(prev => (prev - 10 >= 0 ? prev - 10 : 0));

  const changeText = () =>
    setMessage("Welcome To Learning Community");

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment10}>Increment by 10</button>
      <button onClick={decrement10}>Decrement by 10</button>

      <h2>Hook Increment : {count}</h2>

      <button onClick={changeText}>Change Text</button>
      <h1>{message}</h1>
    </div>
  );
}
