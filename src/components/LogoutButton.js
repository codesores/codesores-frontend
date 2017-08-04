import React, { Component } from 'react'
import Button from 'react-toolbox/lib/button/Button';


class LogoutButton extends Component {
  render() {
    return (
      <Button
            href='/'
            label='Log out'
            className='Header-link'
            onClick={this.props.logout}
          />
    )
  }
}

export default LogoutButton
