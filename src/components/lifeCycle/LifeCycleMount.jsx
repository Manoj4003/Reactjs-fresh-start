import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
    constructor(props) {
        super(props);
        this.state={
            favColor:'Black'
        }
        console.log("Constructor is always executed  any other methods")
    }
  render() {
    console.log("Render Executed");
    
    return (
      <div>
        <h1>Favourite Color:{this.state.favColor}</h1>
      </div>
    )
  }
}
