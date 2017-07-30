import React, { Component } from 'react';
import axios from 'axios'
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


class Validity extends Component {
  constructor(){
    super()
    this.changeValidity = this.changeValidity.bind(this)
  }

  changeValidity(e){
    console.log(e)
    this.props.changeValidity(e)
  }

  // render(){
  //   return (
  //     <span> Validity: 
  //     <select name='validity' onChange={this.changeValidity}>
  //     <option value={''}>--</option>
  //     <option value={1}>1</option>
  //     <option value={2}>2</option>
  //     <option value={3}>3</option>
  //     <option value={4}>4</option>
  //     <option value={5}>5</option>
  //     </select>
  //     </span>
  //     )
  // }

  render(){
    return (
     <SplitButton title={this.props.validity} id="bg-vertical-dropdown-1" onSelect={this.changeValidity} >
     <MenuItem eventKey="1">1</MenuItem>
     <MenuItem eventKey="2">2</MenuItem>
     <MenuItem eventKey="3">3</MenuItem>
     <MenuItem eventKey="4">4</MenuItem>
     <MenuItem eventKey="5">5</MenuItem>
     </SplitButton>


     )
  }
}

export default Validity;

