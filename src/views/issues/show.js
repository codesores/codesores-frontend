import React from 'react'
import axios from 'axios'
import Header from '../../components/Header.js'

// import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
// import Meta from '../../components/issue_components/meta.js'
import Feedback from '../../components/issue_components/feedback.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'

class issueShow extends React.Component {

  constructor(args){
    console.log('rendered')
    super(args)
    this.state = {
      issue: {},
      feedback: []
    };

    //Make API call
    const thisComponent = this

    console.log('this.props.match.params.id')
    console.log(this.props.match.params.id)
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
      issue: json.data,
    })
  }

  render(){
    return(
      <div>

      <Header
          loggedIn={ this.state.token ? true : false }
          logout={ this.deleteToken }
        />

      <div id='issue_id'>
      <Summary issue={this.state.issue}/>
      </div>

      <div id='feedback'>
      <Feedback/>
      </div>

      <div id='contribute'>
      <ButtonContribute />
      </div>

      </div>
    )
  }
}


export default issueShow