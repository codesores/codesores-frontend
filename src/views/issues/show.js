import React from 'react'
import axios from 'axios'

import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
import Meta from '../../components/issue_components/meta.js'
import Feedback from '../../components/issue_components/feedback.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'

class issueShow extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: [],
      feedback: []
    };

    //Make API calls
    const thisComponent = this
    axios.get(`http://localhost:3000/issues/${this.props.match.params.id}`).then(function (response) {
      thisComponent.parseJSONAndSetState(response);
      }
    );

    //Bind components to this
    this.parseJSONAndSetState = this.parseJSONAndSetState.bind(this)
  }

  // consume JSON from API call and update setState
  parseJSONAndSetState(json){
    this.setState({
      issue: [json.data.issue],
      feedback: [json.data.feedback]
    })
  }

  render(){
    return(
      <div>

      <div id='issue_id'>
      <Summary issue={this.state.issue}/>
      <Comments comments={this.state.issue.comments}/>
      <Meta meta={this.state.issue.meta}/>
      </div>

      <div id='feedback'>
      <Feedback feedback={this.state.feedback}/>
      </div>

      <div id='contribute'>
      <ButtonContribute />
      </div>

      </div>
    )
  }
}


export default issueShow