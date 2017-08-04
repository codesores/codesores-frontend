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
      <h1 id="profile-title"> Hey, {info.name} </h1>
      <div className="user-git-button">
      <span>Go to GitHub <a id="git-icon" href={info.html_url}><img src={giticon} width="30px" height="30px" /></a></span>
      </div>

      <StarredIssues  token={this.props.token} stars={this.props.stars} router={this.props.router}/>

      <PastFeedback className="starred-issue" feedbacks={this.props.feedbacks} token={this.props.token}/>

      </div>
      )
  }
}


export default UsersShow
