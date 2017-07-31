import React from 'react'
import axios from 'axios'
import Header from '../../components/Header.js'

// import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
// import Meta from '../../components/issue_components/meta.js'
import Feedback from '../../components/issue_components/feedback.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'
import {Grid, Row, Col} from 'react-bootstrap'

import UserFeedback from '../../components/user_feedback/UserFeedback.js'

class issueShow extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: {},
      feedback: []
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
    })
  }

  render(){

    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div id='issue_id'>
                <Summary issue={this.state.issue}/>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id='feedback'>
                <a href={this.state.issue.url}>Go to Repository</a><br/><br/>
                <UserFeedback issueId={this.props.router.match.params.id} setNotice={this.props.setNotice}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      )
  }
}


export default issueShow
