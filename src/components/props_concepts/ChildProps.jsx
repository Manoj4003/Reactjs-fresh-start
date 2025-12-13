import React from 'react'

export default function ChildProps(props) {
    const { id, name, age } = props.StudentDetails;
    return (
        <div>
            <h2>Accessing parent property to child</h2>
            <ul>
                <li>id:{id}</li>
                <li>name : {name}</li>
                <li>age:{age}</li>
            </ul>
            const data={props.StudentDetails}
        </div>
    )
}
