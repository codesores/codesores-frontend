import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Link from 'react-toolbox/lib/link/Link';

class LogoutButton extends Component {
  render() {
    const info = this.props.info;
    return (
      <Link
            href='#'
            active
            label='Log out'
            className='Header-link'
            onClick={this.props.logout}
          />
    )
  }
}

export default LogoutButton
