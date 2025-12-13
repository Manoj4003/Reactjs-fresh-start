import React from 'react'
import ChildProps from './ChildProps'

export default function StudentDetails(props) {
  return (
    <div>

    <ul>

        <li>Id : {props.id}</li>
        <li>Name :{props.name}</li>
        <li>Age : {props.age}</li>
    </ul>
  <ChildProps StudentDetails={props}/>

    </div>
  )
}
