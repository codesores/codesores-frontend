import React from 'react'
import axios from 'axios'
import Summary from '../../components/issue_components/summary.js'
import Header from '../../components/Header.js'
import { getCookie } from '../../utils';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('token');

class IssuesIndex extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: {},
      repo: {},
      language: {},
      feedbacks: {}
    };

    //Make API call
    let apiUrl = "https://opensores-back.herokuapp.com/issues/?token=" + this.props.token
    const thisComponent = this
    axios.get(apiUrl).then(function (response) {
      thisComponent.parseJSONAndSetState(response);
      }
    );

    //Bind components to this
    this.parseJSONAndSetState = this.parseJSONAndSetState.bind(this)
  }

  // consume JSON from API call and update setState
  parseJSONAndSetState(json){
    this.setState({
      issue: json.data,
      rep: json.data.repo,
      language: json.data.language,
      feedbacks: json.data.feedbacks
    })
  }

  render(){
    return(
      <div>

      <div id='issue_id'>
      <Summary
        issue={this.state.issue}
        repo={this.state.repo}
        language={this.state.language}
        feedbacks={this.state.feedbacks}
      />
      </div>

      </div>
    )
  }
}


export default IssuesIndex
