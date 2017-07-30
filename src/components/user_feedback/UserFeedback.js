import React, { Component } from 'react';
import axios from 'axios'
import Validity from './Validity.js'
import Difficulty from './Difficulty.js'
import RequestType from './RequestType.js'
import Submit from './Submit.js'

class UserFeedback extends Component {
  constructor(){
    super()
    this.state = {
      validity: 0,
      difficulty: 0,
      type: ""
    }

    this.changeValidity     = this.changeValidity.bind(this)
    this.changeDifficulty   = this.changeDifficulty.bind(this)
    this.changeType         = this.changeType.bind(this)
    this.submit             = this.submit.bind(this)
  }

  changeValidity(vali){
    this.setState({validity: vali})
  }

  changeDifficulty(diff){
    this.setState({difficulty: diff})
  }

  changeType(type){
    this.setState({type: type})
  }

  submit(){
    console.log(this.state)
  }

  render(){
    return (
      <div>
      <Validity     validity={this.state.validity}      changeValidity={this.changeValidity}/> 
      <Difficulty   difficulty={this.state.difficulty}  changeDifficulty={this.changeDifficulty}/> 
      <RequestType  type={this.state.type}              changeType={this.changeType} />
      <Submit       submit={this.submit}/>
      </div>
      )
    
  }
}

export default UserFeedback;
