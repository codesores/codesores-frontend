import React, { Component } from 'react';
import axios from 'axios'

class Difficulty extends Component {
  constructor(){
    super()
    this.changeDifficulty = this.changeDifficulty.bind(this)
  }

  changeDifficulty(e){
    this.props.changeDifficulty(e.target.value)
  }

  render(){
    return (
      <span> Difficulty:
      <select name='difficulty' onChange={this.changeDifficulty}>
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

export default Difficulty;
