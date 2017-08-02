import React, { Component } from 'react'
import axios from 'axios'
import UserFeedback from '../user_feedback/UserFeedback.js'
import { Jumbotron, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';


class SearchResults extends Component {

  returnColumn(element){
    console.log("Element********", element)
    return(
      <Link to={'/issues/' + element.id}>
      <Col className='column' sm={6} md={3}>
      <b>Project:</b> <Link to={element.repo.url}>{element.repo.name}</Link>
        <ul>
          <li> <b>Issue:</b> {element.title} </li>
          <li> <b>Labels:</b> {element.label} </li>
          <li> <b>Comment Count:</b> {element.comment_count} </li>
        </ul>
      </Col>
      </Link>
    )
  }

  mapResultsToFours() {
    let results = this.props.results
    let results_array = [];
    for(let i = 0; i < results.length; i ++) {
      if(i % 4 === 0){
        results_array.push([])
      }
      results_array[results_array.length - 1].push(results[i])
    }
    return results_array
  }
  renderRow(row) {
    return (
      <Row>
      {row.map(this.returnColumn)}
      </Row>
    )
  }

  render() {
    return (
      <div className="SearchResults">
      <Grid className="show-grid">
        { this.mapResultsToFours().map(this.renderRow.bind(this)) }
      </Grid>
      </div>
    );
  }
}

export default SearchResults;
