import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
// import ReactBootstrap from 'react-bootstrap';
// import { PageHeader } from 'react-bootstrap';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import './Header.css';

class Header extends Component {
  logInOrLogout() {
    if(this.props.token) {
      const info = this.props.info;
      return (
        <Navigation type='horizontal'>
            <span>
              <Avatar className='Header-userAvatar'
                image={info.avatar_url}
              />
              <span className='Header-userName'>
                <Link to={`/users/${info.id}`} className='Header-link'>{info.name}</Link>
              </span>
            </span>
          <LogoutButton logout={this.props.logout} info={this.props.info} />
          <Link to='/' className='Header-link'>Home</Link>
        </Navigation>
      )
    } else {
      return (
        <Navigation type='horizontal'>
            <LoginButton />
        </Navigation>
      )
    }
  }

  render() {
    const info = this.props.info;
    return (
      <AppBar title='CodeSores'>
          { this.logInOrLogout() }
      </AppBar>
    )
  }
}


export default Header


