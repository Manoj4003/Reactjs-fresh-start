import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
    constructor(props) {
        console.log("Constructor is always executed before all other methods execute");

        super(props);

        this.state = {
            favouriteColor: 'red'
        }

    }
    // static getDerivedStateFromProps(props,state)
    // {
    //   console.log("Executes after the constaructor befor the render method")
    //   return {favouriteColor:props.color}
    // }
    render() {
        console.log("render executes")
        return (


            <div>
               
                <h2>Favourite Color :{this.state.favouriteColor}</h2>
            </div>
            
        )
    }
}
