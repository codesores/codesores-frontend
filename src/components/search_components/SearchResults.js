import React, { Component } from 'react';
import axios from 'axios'

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
      console.log(response.data)
      SearchResults.setState({results: response.data})
    })
  }

  iterateResults(){
    console.log(this.state.results)
    return this.state.results.map((element)=>{
      return (
        <div>
          <li> Title: {element.title} </li>
          <li> Labels: {element.label} </li>
          <li> Comment Count: {element.comment_count} </li>
          <li> Url: {element.url} </li><br/>
        </div> 
        )
    })
  }



  render() {
    console.log(this.state)
    return (
      <div className="SearchResults">
      <ul> { this.iterateResults() } </ul>
      </div>
      );
  }
}

export default SearchResults;
