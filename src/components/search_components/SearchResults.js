import React, { Component } from 'react';
import axios from 'axios'
import UserFeedback from '../user_feedback/UserFeedback.js'

class SearchResults extends Component {

  iterateResults(){
    return this.props.results.map((element)=>{
      return (
        <div>
          <li> Title: {element.title} </li>
          <li> Labels: {element.label} </li>
          <li> Comment Count: {element.comment_count} </li>
          <li> Url: {element.url} </li><br/>
          <UserFeedback /> <br/><br/>
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
