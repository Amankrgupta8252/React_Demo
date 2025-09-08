import React, { Component } from 'react'

export default class demo_01 extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    submit() {
        console.warn(this.state);
    }

    componentDidMount() {
        alert("when you will submit the form you will get the data in console");
    }


  render() {
    return (
      <div>
        <h1>Form</h1>
        <br /><br />
        <input type="trxt" name="username" onChange={(e) => {this.setState({username:e.target.value})}} />
        <br /><br />
        <input type="password" name="password" onChange={(e) => {this.setState({password:e.target.value})}} />
        <br /><br />
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    )
  }
}
