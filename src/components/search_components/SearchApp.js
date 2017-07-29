import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import axios from 'axios';
import querystring from 'querystring';

class SearchApp extends Component {

  constructor(props){
    super(props)
    this.state = {

      query: {
        language: ""
      },
      languages: []
    }
    this.setQuery = this.setQuery.bind(this);
  }

  componentDidMount(){
    this.callInitialize();
  }

  callInitialize(){
    //calls api to recover languages
    let searchApp = this;

    axios.get("http://localhost:3000/issues/start").then((response)=>{
      // console.log(response.data)
      searchApp.setState({languages: response.data})
    })
  }

  callSearch(){
    //calls api to display issues from query
    let searchApp = this;
    let query = querystring.stringify(this.state.query)

    console.log('state before search:', query)


    axios.post(`http://localhost:3000/issues/search`, query).then((response)=>{
      searchApp.props.updateResults(response)
    })
  }

  // componentWillUpdate(){
  //   this.callSearch()
  // }

  

  setQuery(args){
    console.log(args)
    let language = this.state.query.language

    this.setState({query: args}, this.callSearch)
    
  }


  render() {
    return (
      <div className="SearchApp">
      <SearchBar languages={this.state.languages} setQuery={this.setQuery} value={this.state.query}  />
      </div>
      );
  }
}

export default SearchApp;
