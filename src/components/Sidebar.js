import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className='Sidebar'>
      <span className='user-info'>
      {info.name}
      {info.email}
      {info.html_url}
      </span>
      </div>
    );
  }
}

export default Sidebar;
