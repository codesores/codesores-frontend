import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import SearchResults  from './SearchResults';

class SearchApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: "",
      results: {}
    }
    this.changeSearchQuery = this.changeSearchQuery.bind(this);
  }

  changeSearchQuery(query){
    console.log('state changed')
    this.setState({query: query})
    this.handleSearch()
    this.callApi()
  }

  componentDidMount(){
    this.callApi("")
  }

  callApi(query){
    let app = this;

    fetch("http://localhost:3000/sample").then(data => data.json()).then(function(response){
      app.setState({results: response})
      console.log('received json!')
    })
  }

  handleSearch(e){
    // e.preventDefault();
    fetch(`http://localhost:3000/sample?query=${this.state.query}`,
    {
      method: "POST"
    })
  }

  render() {
    return (
      <div className="SearchApp">
      <SearchBar changeSearchQuery={this.changeSearchQuery} value={this.state.query}  />
      <SearchResults results={this.state.results}/>
      </div>
      );
  }
}

export default SearchApp;
