import React, { Component } from 'react'

 class Combined extends Component {
    change()
    {
        alert("This is a class Component");
    }
  render() {
    return (
      <div>
        <button onClick={this.change}>Change</button>
        <FunctionEvent/>
      </div>
    )
  }
}


function FunctionEvent()
{
    function change()
    {
        alert("This is a function component");
    }
    return(
        <button onClick={change}>Change</button>
    )
}
export default Combined;