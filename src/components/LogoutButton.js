import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LogoutButton extends Component {
  render() {
    const info = this.props.info;
    return (
      <div>
      <span className='user-info'>
     User information<br />
     Username: {info.login}<br />
     Name: {info.name}<br />
     Email: {info.email}<br />
     Profile link: {info.html_url}<br />
     Created at: {info.created_at}<br />
     </span>
      <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default LogoutButton
