import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import PastFeedback from '../../components/profile_components/PastFeedback.js'
import StarredIssues from '../../components/profile_components/StarredIssues.js'
import giticon from './github.svg'

class UsersShow extends React.Component {

  componentWillMount(){
    this.props.fetchUser()
  }

  render(){
    const info = this.props.info
    console.log(info)
    return(
      <div>
      <h1 id="profile-title"> {info.name} </h1>
      <span id="git">Go to GitHub <a id="git-icon" href={info.html_url}><img src={giticon} width="30px" height="30px" /></a> </span>

      <Grid>
      <Row className="show-grid">
      <Col xs={10} md={10}><br/><br/><br/>

      <StarredIssues  token={this.props.token} stars={this.props.stars} router={this.props.router}/>

      </Col>
      <Col xs={10} md={10}>

      <PastFeedback className="starred-issue" feedbacks={this.props.feedbacks} token={this.props.token}/>

      </Col>
      </Row>
      </Grid>

      </div>
      )
  }
}


export default UsersShow

