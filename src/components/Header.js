import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'


const Header = () => (
  <header>
    <nav>
      <ul>
        <LoginButton />
        <li><Link to='/index'>Home</Link></li>
        <li><Link to='/issues'>Issues</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
