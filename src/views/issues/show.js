import React from 'react'
import axios from 'axios'

import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
import Meta from '../../components/issue_components/meta.js'
import Vote from '../../components/issue_components/vote.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'

class issueShow extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issueComments: [],
      issueMeta: [],
      feedback: []
    };

    //Make API calls
    const thisComponent = this
    axios.get('http://localhost:3000/issues').then(function (response) {
      thisComponent.parseJSONAndSetState(response);
      console.log(response.data)
      }
    );

    //Bind components to this
    this.parseJSONAndSetState = this.parseJSONAndSetState.bind(this)
  }

  // consume JSON from API call and update setState
  parseJSONAndSetState(json){
    this.setState({
      issueComments: [json],
      issueMeta: [json],
      feedback: [json]
    })
    console.log(json)
    console.log(this.state.issueComments)
    console.log(this.state.issueMeta)
    console.log(this.state.feedback)
  }

  render(){
    return(
      <div>

      <div id='issue_id'>
      <Comments />
      <Summary />
      <Meta />
      </div>

      <div id='feedback'>
      <Vote />
      </div>

      <div id='contribute'>
      <ButtonContribute />
      </div>

      </div>
    )
  }
}


export default issueShow