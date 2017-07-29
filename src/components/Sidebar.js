import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const info = this.props.info;
    console.log(info);
    return (
      <div className='Sidebar'>
      <span className='user-info'>
      User information<br />
      Username: {info.login}<br />
      Name: {info.name}<br />
      Email: {info.email}<br />
      Profile link: {info.html_url}<br />
      Created at: {info.created_at}<br />
      </span>
      </div>
    );
  }
}

export default Sidebar;
