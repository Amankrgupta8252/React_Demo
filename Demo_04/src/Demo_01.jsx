import React, { PureComponent } from 'react'

export default class Demo_01 extends PureComponent {
  constructor() {
    super()
    this.state = {  
      count: 10
    }
  }

  // use arrow function to avoid manual binding
  pluse = () => {
    this.setState({ count: 10 })
}

render() {
      console.log(this.state.count)
    return (
      <div>
        <h1>Count a number: {this.state.count}</h1>
        <button onClick={this.pluse}>click me</button>
      </div>
    )
  }
}

