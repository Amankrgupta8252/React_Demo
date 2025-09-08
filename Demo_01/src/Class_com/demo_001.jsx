import React, { Component } from 'react'

export default class Demo_001 extends Component {
    constructor() {
        super();
        this.state = {
            Name: "Aman Gupta",
            Age: 21
        }
    }
    changenamge() {
        this.setState({
            Name: "Ankit Gupta"
        })
    }
    incregeage() {
        this.setState({
            Age: this.state.Age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>My Name is {this.state.Name} and My Age is {this.state.Age}</h1>
                <button onClick={() => { this.changenamge() }}>change Name</button>
                <button onClick={() => { this.incregeage() }}>increge Age</button>
            </div>
        )
    }
}

// export default Demo_001;