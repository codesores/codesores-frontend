import React, { Component } from 'react';
import axios from 'axios'

class RequestType extends Component {
 constructor(){
  super()
  this.setFeedback = this.setFeedback.bind(this)
}

setFeedback(e){
  this.props.setFeedback('request_type', e.target.value)
}

render(){
  return (
    <span>Scope: 
    <select name='Scope' onChange={this.setFeedback}>
    <option value={''}>----</option>
    <option value='bug'>Bug</option>
    <option value='docs'>Docs</option>
    <option value='other'>Other</option>
    </select>
    </span>
    )
}
}

export default RequestType;
