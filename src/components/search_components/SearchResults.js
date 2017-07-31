import React, { Component } from 'react'
import axios from 'axios'
import UserFeedback from '../user_feedback/UserFeedback.js'
import { Jumbotron, Grid, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';


class SearchResults extends Component {

  returnColumn(element){
    return(

      <Card style={{width: '350px'}}>
    <CardTitle
      title={element.title}
      subtitle={element.author}
      subtitle={element.label}
    />
    <CardText>
    <ul>
      <li>Labels: {element.label} </li>
      <li>Comment Count: {element.comment_count} </li>
      </ul>
    </CardText>
    <CardActions>
      <Link to={'/issues/' + element.id}> See issue</Link>
    </CardActions>
  </Card>
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
