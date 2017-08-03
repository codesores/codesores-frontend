import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from 'react-toolbox/lib/button/Button';
import HomeIcon from './HomeIcon';

class HomeButton extends Component {
  render() {
    const HomeButton = withRouter(({history}) => (
      <Button
          className='Header-link'
          onClick={() => { history.push('/') }}
        >
        <HomeIcon />
        {' '}
        Home
      </Button>
    ))
    return (
      <HomeButton />
    );
  }
}

export default HomeButton;
