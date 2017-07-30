import React from 'react'
import { Link } from 'react-router-dom'

const UserLoggedIn = () => (
  <div className="user-details-header">
    <ul>
      <li>
        Hello, { this.props.username }<br>
        <span class="italics">Not { this.props.usernam }?</span>
        /*{ <LogoutButton /> }*/
      </li>
    </ul>
  </div>
)
