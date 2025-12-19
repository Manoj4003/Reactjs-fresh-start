import axios from 'axios'
import React, { useEffect } from 'react'

export default function AxiosDemo() {
//     async function fetchmethod() {
//         // const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//         // console.log(response);

//         // const data = response.json();
//         // console.log(data);

// }
        // Using API
        async function fetchmethod()
        {
            const res=await axios.get("https://official-joke-api.appspot.com/random_joke");
            console.log(res);
            
        }
    useEffect(()=>{
        fetchmethod();
    },[])
    return (
        <div>

            <h1>Fetching the Details From API</h1>
            <button onClick={fetchmethod}>Click ME</button>



        </div>
    )
}
