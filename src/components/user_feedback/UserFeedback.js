import React, { Component } from 'react';
import axios from 'axios'
import qs from 'qs';

import { ButtonGroup } from 'react-bootstrap';

import Validity from './Validity.js'
import Difficulty from './Difficulty.js'
import RequestType from './RequestType.js'
import Submit from './Submit.js'
import { getCookie } from '../../utils';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('token');

class UserFeedback extends Component {
//missing user id from feedback params !!!
//showForm is not tied to specific user !!!
  constructor(){
    super()
    this.state = {
      feedback: {
        validity: '',
        difficulty: '',
        request_type: "",
        issue_id: null
      },
      showForm: true
    }
    console.error('feedback questionaire constructed')

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

  hideForm(){
    this.setState({showForm: false})
  }

  submit(){
    this.setId()
    this.hideForm()
    let UserFeedback = this
    let feedback = qs.stringify(this.state)
    // console.log('feedback:', feedback)
    let apiUrl = "http://localhost:3000/user_feedbacks/?token=" + this.props.token + "&" + feedback
    axios.post(apiUrl, {withCredentials: true, 'Access-Control-Allow-Credentials': true}).then((response)=>{
      UserFeedback.props.setNotice([])
    }).catch((error)=>{
      UserFeedback.props.setNotice(error.toString(), "Couldn't send feedback to server")
    })
  }

  render(){
    if (this.state.showForm){
      return (
        <div className="feedback-sidebar">
        <p>Help categorize this issue:</p>
        <ButtonGroup vertical className="feedback-form">
        Fill out the following:
        <Validity
          validity={this.state.feedback.validity}
          setFeedback={this.setFeedback}
        />

        <Difficulty
          difficulty={this.state.feedback.difficulty}
          setFeedback={this.setFeedback}
        />
        <RequestType
          type={this.state.feedback.request_type}
          setFeedback={this.setFeedback}
        />
        <Submit
          submit={this.submit}
        />
        </ButtonGroup>
        </div>
        )
    } else {
      return (<div> Thank you! </div>)

    }
  }
}

export default UserFeedback;
