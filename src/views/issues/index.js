import React from 'react'
import axios from 'axios'
import Summary from '../../components/issue_components/summary.js'
import Header from '../../components/Header.js'

class IssuesIndex extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: {},
      feedback: []
    };

    //Make API call
    let apiUrl = "http://localhost:3000/issues/?token=" + this.props.token
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
    })
  }

  render(){
    return(
      <div>

      <div id='issue_id'>
      <Summary 
        issue={this.state.issue} 
        repo={this.state.issue.repo} 
        language={this.state.issue.language.language}
        
      />
      </div>

      </div>
    )
  }
}


export default IssuesIndex
