// import React from 'react'
// import { Link } from 'react-router-dom'
//
//
// const Login = () => (
//   <header>
//     <nav>
//     <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8515e9a1dcd00ca18123">Github Login</a>
//     </nav>
//   </header>
// )
//
// export default Login

import React, { Component } from 'react';
import LoginButton from './LoginButton';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            CodeSores
          </h2>
          <p className="Login-intro">
            An app to help you find the right opportunities to contribute to open source projects.
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;
