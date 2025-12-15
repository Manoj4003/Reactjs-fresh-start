import React, { useState } from 'react'

export default function CurrentTime() {
    let time = new Date().toLocaleTimeString();
    const [refresh, setRefersh] = useState(time);

    function refreshTime() {
        time = new Date().toLocaleTimeString();
        setRefersh(time);
    }


    return (

        <div>
            <h1> refresh :{refresh}</h1>
            <button onClick={refreshTime}>Refresh Time</button>
        </div>
    )
}
