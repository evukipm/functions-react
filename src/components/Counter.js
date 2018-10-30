import React, { Component } from 'react'

class Counter extends Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}


export default  Counter;