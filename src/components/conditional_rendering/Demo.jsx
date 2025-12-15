import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome </h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Better luck next time </h1>
                </div>
            )
        }
    }
}
export default Demo;