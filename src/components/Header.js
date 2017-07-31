import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';


class Header extends Component {
  logInOrLogout() {
    if(this.props.loggedIn) {
      return <LogoutButton logout={this.props.logout} info={this.props.info} />
    }
    else {
      return <LoginButton />
    }
  }

  render() {
    return (
      <div className='nav'>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <div id='logo'><Link to="/">CodeSores</Link></div>
      <div id='main-menu'>
        <ul>
          <li>{ this.logInOrLogout() }</li>
        </ul>
      </div>
      </div>
    )
  }
}


export default Header
