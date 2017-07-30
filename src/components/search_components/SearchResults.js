import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

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
      // console.log(response.data)
      SearchResults.setState({results: response.data})
    })
  }

  returnColumn(element){
    console.log(element)
    return(
      <Col sm={6} md={3}>
      <li> Title: {element.title} </li>
      <li> Labels: {element.label} </li>
      <li> Comment Count: {element.comment_count} </li>
      <li> Url: {element.url} </li><br/>
      </Col>
    )
  }

  iterateResultsAsRows(){
    let seesaw = 0
    let thisFunction = this
    return this.state.results.map( function(element, idx) {
      if(idx % 4 === 0 && seesaw === 0){ seesaw = 1; return (this.returnColumn (element))}
      else if(idx % 4 === 0 && seesaw === 1){ seesaw = 0; return (this.returnColumn(element))}
      else{ thisFunction.returnColumn(element) }
    })
  }

  render() {
    return (
      <div className="SearchResults">
      <Grid className="show-grid">
      { this.iterateResultsAsRows() }
      </Grid>
      </div>

    );
  }

}

export default SearchResults;
