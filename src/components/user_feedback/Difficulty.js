import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class Difficulty extends Component {
  constructor(){
    super()
    this.setFeedback = this.setFeedback.bind(this)
  }

  setFeedback(e){
    this.props.setFeedback('difficulty', e)
  }

  render(){
    return (
      <DropdownButton title={`Difficulty: ${this.props.difficulty}`} id="bg-vertical-dropdown-2" onSelect={this.setFeedback} >
     <MenuItem eventKey="1">1</MenuItem>
     <MenuItem eventKey="2">2</MenuItem>
     <MenuItem eventKey="3">3</MenuItem>
     <MenuItem eventKey="4">4</MenuItem>
     <MenuItem eventKey="5">5</MenuItem>
     </DropdownButton>
      )
  }
}

export default Difficulty;
