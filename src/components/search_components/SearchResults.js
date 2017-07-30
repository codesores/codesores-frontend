import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import UserFeedback from '../user_feedback/UserFeedback.js'
import { Link } from 'react-router-dom'

class SearchResults extends Component {

  constructor(){
    super()
    this.state = {
      results: []
    }

    this.stubResults()
  }

  stubResults(){
    let SearchResults = this
    axios.get("http://localhost:3000/issues/search").then((response)=>{
      SearchResults.setState({results: response.data})
    })
  }

  returnColumn(element){
    return(
      <Col sm={6} md={3}>
      <li> Title: {element.title} </li>
      <li> Labels: {element.label} </li>
      <li> Comment Count: {element.comment_count} </li>
      <li> Url: {element.url} </li><br/>
      <li> <Link to={'/issues/' + element.id}>See Issue</Link> </li> <br/>
       <UserFeedback issueId={element.id}/> <br/><br/>
      
      </Col>
    )
  }

  mapResultsToFours() {
    let results = this.state.results
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
      <Grid className="test">
      </Grid>
      </div>
    );
  }
}

export default SearchResults;
