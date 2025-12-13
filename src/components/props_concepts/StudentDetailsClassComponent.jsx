import React, { Component } from 'react'

export default class StudentDetailsClassComponent extends Component {
  render() {
    return (
      <div>

        <h1>Student Details using class Components</h1>
        <ul>
            <li>Id : {this.props.id}</li>
            <li>Name : {this.props.name}</li>
            <li>Age : {this.props.age}</li>
        </ul>


      </div>
    )
  }
}
