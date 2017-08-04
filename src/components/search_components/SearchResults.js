import React, { Component } from 'react'
import { Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import { CSSTransitionGroup } from 'react-transition-group'

class SearchResults extends Component {
  componentDidMount(){
    console.log('I mounted')
  }

  renderIssue(element){
    return(

      <div id={`issue_${element.id}`} className='issue-card'>
      <h2>{element.title}</h2>
        <Link to={'/issues/' + element.id}>Issue</Link>
          <b>Project:</b> <Link to={element.repo.url}>{element.repo.name}</Link>
         <p>{element.label}</p>
          <b>Comment Count:</b> {element.comment_count}
        </div>

    )
  }


  render() {

    return (
      <ul className='issue-deck'>
      { this.props.resultsToDisplay.map((result, idx) =>
        <CSSTransitionGroup
          transitionName='issue'
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
