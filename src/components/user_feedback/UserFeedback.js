import React, { Component } from 'react';
import axios from 'axios'
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import axios from 'axios';
import qs from 'qs';


import Validity from './Validity.js'
import Difficulty from './Difficulty.js'
import RequestType from './RequestType.js'
import Submit from './Submit.js'

class UserFeedback extends Component { //missing user id from feedback params !!!
  constructor(){
    super()
    this.state = {
      feedback: {
        validity: '-',
        difficulty: '-',
        request_type: "-",
        issue_id: null
      }
    }

    this.setFeedback = this.setFeedback.bind(this)
    this.submit      = this.submit.bind(this)
  }

  setId(){
    var feedback = {...this.state.feedback}
    feedback['issue_id'] = this.props.issueId;
    this.setState({feedback})
    this.state.feedback.issue_id = this.props.issueId
  }

  setFeedback(scope, value){
    var feedback = {...this.state.feedback}
    feedback[scope] = value;
    this.setState({feedback})
  }

  submit(){
    this.setId()
    let query = qs.stringify(this.state)
    axios.post("http://localhost:3000/user_feedbacks",query).then((response)=>{
      console.log(response)
    })
  }

  render(){
    return (
      <div>
      
      <Validity     validity={`Validity: ${this.state.validity}`}      setFeedback={this.setFeedback}/> 
      <Difficulty   difficulty={this.state.difficulty}  setFeedback={this.setFeedback}/> 
      <RequestType  type={this.state.type}              setFeedback={this.setFeedback} />
      <Submit       submit={this.submit}/>

      </div>
      )
    
  }
}

export default UserFeedback;
