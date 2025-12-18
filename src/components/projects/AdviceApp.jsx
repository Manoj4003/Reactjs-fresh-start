import React, { useEffect, useState } from 'react';
import './AdviceApp.css';

export default function AdviceApp() {
  const [advice, setAdvice] = useState("Please click button to get advice");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    console.log(res);

    const data = await res.json();
    console.log(data);

    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(()=>{
    getAdvice();
  },[])
  return (
    <div className='container'>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You are reached <b>{count}</b> today</p>
    </div>
  )
}
