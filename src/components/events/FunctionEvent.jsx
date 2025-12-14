import React from 'react';


export default function FunctionEvent() {
    function functionEvent()
    {
        alert("This is a Functional Event");
    }
  return (
    
    <div className='btn'>

        <button onClick={functionEvent}>Click Me</button>
    </div>
  )
}
