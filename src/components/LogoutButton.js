import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-toolbox/lib/button/Button';


class LogoutButton extends Component {
  render() {
    const info = this.props.info;
    return (
      <Button
            href='/'
            active
            label='Log out'
            className='Header-link'
            onClick={this.props.logout}
          />
    )
  }
}

export default LogoutButton
