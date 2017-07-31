import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';

class Submit extends Component {

  render(){
    return (
      <Button onClick={this.props.submit}> Rate </Button>
      )
  }
}

export default Submit;

