import React from 'react'
import axios from 'axios'
import Summary from '../../components/issue_components/summary.js'

class IssuesIndex extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      issue: {},
      feedback: []
    };

    //Make API call
    const thisComponent = this
    axios.get(`http://localhost:3000/issues/`).then(function (response) {
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
      <Summary issue={this.state.issue}/>
      </div>

      </div>
    )
  }
}


export default IssuesIndex