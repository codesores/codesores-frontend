import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import SearchResults  from './SearchResults';
import axios from 'axios';

class SearchApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
    this.changeSearchQuery = this.changeSearchQuery.bind(this);
  }

  componentDidMount(){
    this.callApi()
  }

  callApi(){
    //calls api to display all top issues
    let searchApp = this;

    axios.get("http://localhost:3000/issues").then((response)=>{
      searchApp.props.updateResults(response)
    })
  }

  changeSearchQuery(query){
    this.setState({query: query})
    this.handleSearch()
  }

  
  handleSearch(e){    
    //calls api to display issues from query
    let searchApp = this;
    let query = this.state.query;
    axios.post(`http://localhost:3000/issues/search?search=${query}`).then((response)=>{
      searchApp.props.updateResults(response)
    })
  }

  render() {
    return (
      <div className="SearchApp">
      <SearchBar changeSearchQuery={this.changeSearchQuery} value={this.state.query}  />
      <SearchResults results={this.props.results}/>
      </div>
      );
  }
}

export default SearchApp;
