import React, { Component } from 'react';
import axios from 'axios'

class Submit extends Component {

  render(){
    return (
      <span>
      <input type="submit" value="Rate" onClick={this.props.submit}/>
      </span>
      )
  }
}

export default Submit;

