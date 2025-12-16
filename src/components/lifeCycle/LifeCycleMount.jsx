import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
  constructor(props) {
    console.log("Constructor is always executed before all other methods execute");
    
    super(props);
    
    this.state={
      favouriteColor:'red'
    }
    
  }
  // static getDerivedStateFromProps(props,state)
  // {
  //   console.log("Executes after the constaructor befor the render method")
  //   return {favouriteColor:props.color}
  // }/
  //This is like im the boss im not going to give any permission for remaining Operations

  componentDidMount()
  {
    console.log("This is executes after the render method and render again");
   setTimeout(()=>{
     this.setState({
      favouriteColor:'orange'
    }
  )
   },(1000))
  }
  render() {
      console.log("render executes")
    return (
    
      
      <div>

        <h2>Favourite Color :{this.state.favouriteColor}</h2>
      </div>
    )
  }
}
