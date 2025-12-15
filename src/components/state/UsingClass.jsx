import { Component } from "react";

class UsingClass extends Component {

  constructor() {
    super();
    this.state = {
      message: "Welcome to my channel"
    };
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent() {
    this.setState({
      message: "Thanks for subscribing"
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeContent}>Subscribe</button>
      </div>
    );
  }
}

export default UsingClass;
