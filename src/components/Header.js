import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'


class Header extends Component {
  logInOrLogout() {
    if(this.props.loggedIn) {
      return <LogoutButton logout={this.props.logout} />
    }
    else {
      return <LoginButton />
    }
  }

  render() {
    return (
  <header>
    <div className="Login">
      <div className="Login-header">
        <h2 className="Login-title">
          CodeSores
        </h2>
        <p className="Login-intro">
          An app to help you find the right opportunities to contribute to open source projects.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
        { this.logInOrLogout() }
        </li>
        <li><Link to='/index'>Home</Link></li>
      </ul>
    </nav>
  </header>
    )
  }
}


export default Header
