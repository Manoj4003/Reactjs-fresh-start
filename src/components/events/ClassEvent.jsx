import React, { Component } from 'react';


export default class ClassEvent extends Component {
    classEvent()
    {
        alert("This is a class Event ")
    }
  render() {
    return (
      <div className='btn'>


        <button onClick={this.classEvent}>Click Me</button>
      </div>
    )
  }
}
