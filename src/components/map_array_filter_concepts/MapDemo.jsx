import React from 'react'
import { stuArray } from './StudentDetail';

export default function MapDemo() {
    console.log(stuArray);

    // function stuData(stu)
    // {
    //     return <ul>
    //         <li>Id:{stu.id}</li>
    //         <li>Name:{stu.name}</li>
    //         <li>Age:{stu.age}</li>
    //     </ul>
    // }
    return (
        <div>
            {/* <h1>Using map and see how deficult is this </h1>
            <ul>
                <li>Id:{stuArray[0].id}</li>
                <li>Name:{stuArray[0].name}</li>
                <li>Age :{stuArray[0].age}</li>
            </ul>
            <ul>
                <li>Id:{stuArray[1].id}</li>
                <li>Name:{stuArray[1].name}</li>
                <li>Age :{stuArray[1].age}</li>
            </ul>
            <ul>
                <li>Id:{stuArray[2].id}</li>
                <li>Name:{stuArray[2].name}</li>
                <li>Age :{stuArray[2].age}</li>
            </ul> */}

{/* If any new values cames i no to rint manually 
so avoid this use map */}

{/* Using map */}
<h1>Using Map</h1>
{/* {stuArray.map(stuData)} */}

{/* Instead  of this many line easly achive in arrow function */}

{stuArray.map(stu=>{
   return <ul>
            <li>Id:{stu.id}</li>
            <li>Name:{stu.name}</li>
            <li>Age:{stu.age}</li>
        </ul>
})}

        </div>
    )
}
