import React, { Component } from 'react';

class SearchResults extends Component {
  
  iterateResults(){
    return Object.keys(this.props.results).map((key)=>{
      return (
        <div>
        <li>{key}</li> 
        <p> {this.props.results[key]} </p>
        </div>
        )
    })
  }

  render() {
    return (
      <div className="SearchResults">
      <ul> { this.iterateResults() } </ul>
      </div>
      );
  }
}

export default SearchResults;
