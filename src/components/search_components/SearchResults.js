import React, { Component } from 'react';

class SearchResults extends Component {

  iterateResults(){
    console.log(this.props.results)
    return this.props.results.data.map((element)=>{
      return (
        <div>
        <li>{element}</li>
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
