import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class RequestType extends Component {
 constructor(){
  super()
  this.setFeedback = this.setFeedback.bind(this)
}

setFeedback(e){
  this.props.setFeedback('request_type', e)
}

render(){
  return (
    <SplitButton title={`Type: ${this.props.type}`} id="bg-vertical-dropdown-3" onSelect={this.setFeedback} >
   <MenuItem eventKey="bug">Bug</MenuItem>
   <MenuItem eventKey="docs">Docs</MenuItem>
   <MenuItem eventKey="other">Other</MenuItem>
   
   </SplitButton>
   )
}
}

export default RequestType;
