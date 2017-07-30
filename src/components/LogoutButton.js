import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogoutButton extends Component {
  render() {
    return (
      <button onClick={this.props.logout}>Log Out</button>
    )
  }
}

export default LogoutButton
