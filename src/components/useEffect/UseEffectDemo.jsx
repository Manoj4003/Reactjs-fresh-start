import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
   const [num1,setNum1]=useState(100)

    useEffect(() => {
        setNum1(20);
        console.log("From Use Effect");

    }, [])
    return (
        <div>

            <h1>{num1}</h1>


        </div>
    )
}
