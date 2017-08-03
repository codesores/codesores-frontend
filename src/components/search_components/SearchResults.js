import React, { Component } from 'react'
import axios from 'axios'
import UserFeedback from '../user_feedback/UserFeedback.js'
import { Jumbotron, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import { CSSTransitionGroup } from 'react-transition-group'

class SearchResults extends Component {

  constructor() {
    super()

    this.state = {
      resultsOffPage: [],
      resultsOnPage: []
    }
  }

  renderIssue(element){
    return(

      <div id={`issue_${element.id}`} className='issue-card'>
      <header>{element.title}</header>
        <Link to={'/issues/' + element.id}>Issue</Link>
          <b>Project:</b> <Link to={element.repo.url}>{element.repo.name}</Link>
         <p>{element.label}</p>
          <b>Comment Count:</b> {element.comment_count}
        </div>

    )
  }

  doTheThing (array, interval, func) {
    var thisComponent = this
    if(array.length > 0) {
      setTimeout(function() {
        func(array[0])
        thisComponent.doTheThing(array.pop(), interval, func)
      }, 1000)
    }
  }

  componentDidUpdate () {
    console.log("componentDidMount")
    console.log("this.props.resultsToDisplay:", this.props.resultsToDisplay)
    var thisComponent = this

    if(thisComponent.state.resultsOffPage.length === 0) {
      this.setState({resultsOffPage: thisComponent.props.resultsToDisplay})
    }
    // setTimeout(() => alert('hi'), 1000)
    this.doTheThing(
      thisComponent.state.resultsOffPage,
      1000,
      function(result){
        console.log("result:",result)
        thisComponent.setState({
          resultsOnPage: thisComponent.state.resultsOnPage.concat(result)
        })
      }
      // function(thing){console.log(thing)}
    )
  }

  render() {

    return (
      <ul className='issue-deck'>
      { this.state.resultsOnPage.map((result, index) =>
        <CSSTransitionGroup
          transitionName="issue"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}>
          <li>{this.renderIssue(result)}</li>
          </CSSTransitionGroup>
        )
         }
      </ul>
    );
  }
}

export default SearchResults;
