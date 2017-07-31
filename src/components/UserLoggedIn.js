import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton.js'

const UserLoggedIn = () => (
  <div className="user-details-header">
    <ul>
      <li>
        <p>Hello, { this.props.username }</p><br/>
        <span className="italics"> Not { this.props.username }?</span>
        <LogoutButton />
      </li>
    </ul>
  </div>
)
