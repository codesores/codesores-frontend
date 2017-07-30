import React, { Component } from 'react';
import axios from 'axios'

class Validity extends Component {
  constructor(){
    super()
    this.changeValidity = this.changeValidity.bind(this)
  }

  changeValidity(e){
    this.props.changeValidity(e.target.value)
  }

  render(){
    return (
      <span> Validity: 
      <select name='validity' onChange={this.changeValidity}>
      <option value={''}>--</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      </select>
      </span>
      )
  }
}

export default Validity;

