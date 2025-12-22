import React, { useRef } from 'react';

export default function UseRefDemo() {

  const countRef = useRef(0);

  function increment() {
    countRef.current = countRef.current + 1;
    console.log("Count:", countRef.current);
  }

  return (
    <div>
      <h2>useRef Counter</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
