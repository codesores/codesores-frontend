import React from 'react'
import axios from 'axios'
import Header from '../../components/Header.js'
import DonutChart from '../../components/data_viz/donut.js'

// import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
// import Meta from '../../components/issue_components/meta.js'
import Feedback from '../../components/issue_components/feedback.js'
import StarApp from '../../components/star_components/StarApp.js'

import ButtonContribute from '../../components/issue_components/button_contribute.js'
import {Grid, Row, Col} from 'react-bootstrap'

import UserFeedback from '../../components/user_feedback/UserFeedback.js'


class issueShow extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: {},
      repo: {},
      language: {},
      feedbacks: {}
    };

    //Make API call
    const thisComponent = this
    let apiUrl = "http://localhost:3000/issues/" + this.props.router.match.params.id + "/?token=" + this.props.token

    axios.get(apiUrl).then(function (response) {
      thisComponent.parseJSONAndSetState(response);
      thisComponent.props.setNotice([])
    }
    ).catch((error)=>{
      thisComponent.props.setNotice(error.toString(), `Couldn't find the issue with id: ${this.props.router.  match.params.id} `)
    })

    //Bind components to this
    this.parseJSONAndSetState = this.parseJSONAndSetState.bind(this)
  }

  // consume JSON from API call and update setState
  parseJSONAndSetState(json){
    this.setState({
      issue: json.data,
      repo: json.data.repo,
      language: json.data.language,
      feedbacks: json.data.feedbacks
    })
  }

  feedbackConditional(){
    const issueShow = this

    if (this.state.issue.user_feedbacks && issueShow.props.info){
      let display = true

      this.state.issue.user_feedbacks.forEach((feedback)=>{
        if (feedback.user_id === issueShow.props.info.id){
          display = false
        }
      })

      if (display){
        return (
          <UserFeedback issueId={this.props.router.match.params.id} setNotice={this.props.setNotice} token={this.props.token} />
          )
      }

      }
    }


  persistStarState(){
    let hasVoted = false
    if (this.props.issue.stars){
      this.props.issue.stars.forEach((star)=>{
        if (star.user_id === this.props.info.id){
          hasVoted = true
        }
      })
    }
    return hasVoted
  }


  render(){
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div id='issue_id'>
                <Summary 
                  issue={this.state.issue}
                  repo={this.state.repo}
                  language={this.state.language}
                  feedbacks={this.state.feedbacks}
                />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id='feedback'>
                <StarApp issue={this.state.issue} token={this.props.token} info={this.props.info}/>
                <a href={this.state.issue.url}>Go to Repository</a><br/><br/>
                {this.feedbackConditional()}
              </div>
            </Col>
          </Row>
        </Grid>
        <DonutChart value={50} lowerLimit={0} upperLimit={100} delay={1000} diameter={500} />
      </div>
      )
  }
}


export default issueShow
