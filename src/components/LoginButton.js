import React, { Component } from 'react';
// import Button from 'react-toolbox/lib/button/Button';
// import GithubIcon from './GithubIcon';
// import './LoginButton.css';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '8515e9a1dcd00ca18123'
const scope = 'user:email'

class LoginButton extends Component {
  render() {
    return (
      <div>
      <a
        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
      >
        Login with GitHub
      </a>
      </div>
    );
  }
}

export default LoginButton;
