import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import ReactBootstrap from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';


class Header extends Component {
  logInOrLogout() {
    if(this.props.loggedIn) {
      console.log('logged in!')
      return <LogoutButton logout={this.props.logout} />
    }
    else {
      return <LoginButton />
    }
  }

  render() {
      console.log(this.props)
    return (
  <header>
     <PageHeader>CodeSores</PageHeader>
    <nav>
    <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8515e9a1dcd00ca18123">Github Login</a>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <ul>
        <li>
        { this.logInOrLogout() }
        </li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  </header>
    )
  }
}


export default Header
