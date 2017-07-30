import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
    <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8515e9a1dcd00ca18123">Github Login</a>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <ul>
        <li><Link to='/index'>Home</Link></li>
        <li><Link to='/issues'>Issues</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header