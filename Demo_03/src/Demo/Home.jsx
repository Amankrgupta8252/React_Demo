import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "Home Component"
        }
    }
  render() {
    return (
      <div>
        <h1>
            Home Page
        </h1>
        <h2>
            {this.state.name}
        </h2>   
      </div>
    )
  }
}
