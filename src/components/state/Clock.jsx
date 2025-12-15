import React, { useState } from 'react'

function Clock() {
    let time = new Date().toLocaleTimeString();
    const [now, setNow] = useState(time)

     function refreshTime()
    {
        time = new Date().toLocaleTimeString();
        setNow(time)
    }
    return (
        <div>

            <h1>Count:{now}</h1>

            <button onClick={refreshTime}>Time</button>
        </div>
    )
}

export default Clock