import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import PastFeedback from '../../components/profile_components/PastFeedback.js'
import StarredIssues from '../../components/profile_components/StarredIssues.js'

class UsersShow extends React.Component {

  componentWillMount(){
    this.props.fetchUser()
  }


  render(){
    const info = this.props.info
    return(
      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div id='issue_id'>
                <h1> {info.name} </h1>
                <StarredIssues token={this.props.token} stars={info.stars} router={this.props.router}/>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id='feedback'><br/>
                <a href={info.html_url}>GitHub Page</a><br/><br/>
                <PastFeedback feedbacks={info.user_feedbacks} token={this.props.token}/><br/><br/>
              </div>
            </Col>
          </Row>
      </Grid>
      )
  }
}


export default UsersShow

