import React, { Component } from 'react'
import axios from 'axios'
import UserFeedback from '../user_feedback/UserFeedback.js'
import { Jumbotron, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import { CSSTransitionGroup } from 'react-transition-group'

class SearchResults extends Component {

  returnColumn(element){
    return(
      <Link to={'/issues/' + element.id}>

      <b>Project:</b> <Link to={element.repo.url}>{element.repo.name}</Link>
        <ul>
          <li> <b>Issue:</b> {element.title} </li>
          <li> <b>Labels:</b> {element.label} </li>
          <li> <b>Comment Count:</b> {element.comment_count} </li>
        </ul>

      </Link>
    )
  }

  render() {

    return (
      <div className="SearchResults">
      { this.props.resultsToDisplay.map((result) =>
          <CSSTransitionGroup
            transitionName="issue"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
          <li>{this.returnColumn(result)}</li>
        </CSSTransitionGroup>
        )
         }
      </div>
    );
  }
}

export default SearchResults;
