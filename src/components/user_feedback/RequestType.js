import React, { Component } from 'react';
import axios from 'axios'

class RequestType extends Component {
 constructor(){
  super()
  this.changeType = this.changeType.bind(this)
}

changeType(e){
  this.props.changeType(e.target.value)
}

render(){
  return (
    <span>Scope: 
    <select name='Scope' onChange={this.changeType}>
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
