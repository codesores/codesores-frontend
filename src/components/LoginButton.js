import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-toolbox/lib/button/Button';
import GithubIcon from './GithubIcon';
import './LoginButton.css';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '8515e9a1dcd00ca18123'
const scope = 'user:email'

class LoginButton extends Component {
  render() {
    return (
      <Button
          raised
          accent
          href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
        >
        <GithubIcon />
        {' '}
        Login with GitHub
      </Button>
    );
  }
}

export default LoginButton;
