import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import axios from 'axios';
import querystring from 'querystring';

class SearchApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchBarCurrentValue: {
        language: ""
      },
      languages: [],
    },

    this.setQuery = this.setQuery.bind(this);
    this.languageDropDown = this.languageDropDown.bind(this);
  }

  componentDidMount(){
    this.callInitialize();
  }

  languageDropDown(){
    let languages = this.state.languages
    return languages.map((language, idx)=>{
      languages.push({value: language, label: language})
      console.log(languages)
      return languages
    })
  }

  callInitialize(){
    //calls api to recover languages
    let searchApp = this;
    let apiUrl = "http://localhost:3000/issues/start/?token=" + this.props.token

    axios.get(apiUrl).then((response)=>{
      searchApp.setState({languages: this.languageDropDown()})
      searchApp.props.setNotice([])
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover languages")
    })
  }

  callSearch(){
    //calls api to display issues from query
    let searchApp = this;
    let query = querystring.stringify(this.state.query)
    let apiUrl = "http://localhost:3000/issues/search/?token=" + this.props.token + "&" + query

    axios.post(apiUrl).then((response)=>{
      searchApp.props.updateResults(response.data)
      searchApp.props.setNotice([])
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover issues")
    })
  }

  setQuery(args){
    let language = this.state.searchBarCurrentValue.language
    this.setState({query: args}, this.callSearch)
  }


  render() {
    return (
      <div className="SearchApp">
      <SearchBar languages={this.state.languages} setQuery={this.setQuery} searchBarCurrentValue={this.state.searchBarCurrentValue} token={this.props.token}/>
      </div>
      );
  }
}

export default SearchApp;
