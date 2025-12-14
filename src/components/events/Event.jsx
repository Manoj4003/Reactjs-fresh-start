import React from 'react'
import ClassEvent from './ClassEvent'
import FunctionEvent from './FunctionEvent'
import "./Style.css";

export default function Event() {
  return (
    <div>
        <ClassEvent/>
        <FunctionEvent/>
    </div>
  )
}
