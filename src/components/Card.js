import React, { Component } from 'react'

class Card extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.index);
  }
  render() {
    return (
      <tr>
        <td><img src={this.props.data.picture} alt={this.props.data.name}></img></td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.popularity}</td>
        <td><button onClick={this.handleDelete}>Delete</button></td>
      </tr>
    )
  }
}

export default Card;