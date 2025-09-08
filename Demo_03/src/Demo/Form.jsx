import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

  render() {
    return (
      <div>
        <h1>
            Form Page
        </h1>
        <h2>
            This is Form Component
        </h2>
        <input type="text" name='name' placeholder='Enter your name' onChange={(e) => this.setState({name: e.target.value})} />
        <br /><br />
        <input type="email" name='email' placeholder='Enter your email' onChange={(e) => this.setState({email: e.target.value})} />
        <br /><br />
        <input type="password" name='password' placeholder='Enter your password' onChange={(e) => this.setState({password: e.target.value})} />
        <br /><br />
        <button onClick={() => alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nPassword: ${this.state.password}`)}>Submit</button>
      </div>
    )
  }
}
