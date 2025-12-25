import React from 'react'

export default function Revise(props) {
    let {id,name,age}=props
  return (
   <ul>
    <li>{id}</li>
    <li>{name}</li>
    <li>{age}</li>
   </ul>
  )
}
