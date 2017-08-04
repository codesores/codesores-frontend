import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import axios from 'axios';
import querystring from 'querystring';
import Loading from './Loading.js'

class SearchApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchBarCurrentValue: {
        language: [],
        keywords: '',
        difficulty: 1,
        documentation: true,
        bugs: true,
        features: true,
        other: true
      },
      languages: [],
      loading: true

    }

    this.setQuery = this.setQuery.bind(this);
    this.languageDropDown = this.languageDropDown.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount(){
    this.callInitialize();
  }

  languageDropDown(languages){
    let languages_array = {}
    languages.map((language)=> languages_array[language] = language)
    return languages_array
  }

  callInitialize(){
    //calls api to recover languages
    let searchApp = this
    let apiUrl = "http://localhost:3000/issues/start/?token=" + this.props.token

    axios.get(apiUrl).then((response)=>{
      let language_array = this.languageDropDown(response.data.languages)
      searchApp.setState({languages: language_array})
      searchApp.props.updateResults(response.data.issues)
      searchApp.props.setNotice([]) // TODO -- WHAT DOES THIS DO?
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover languages")
    }).then(this.setState({loading: false}))
  }

  search(){
    this.setState({loading: true})
    let searchApp = this
    let query = querystring.stringify(searchApp.state.searchBarCurrentValue)
    let apiUrl = "http://localhost:3000/issues/search/?token=" + this.props.token + "&" + query

    axios.post(apiUrl).then((response)=>{
      this.setState({loading: false})
      searchApp.props.updateResults(response.data)
      searchApp.props.setNotice([])
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover issues")
    })
  }

  setQuery(key_hash, value){
  this.state.searchBarCurrentValue[key_hash] = value
    this.forceUpdate()
  }

  render() {
    return (
      <div>
      <SearchBar languages={this.state.languages} setQuery={this.setQuery} searchBarCurrentValue={this.state.searchBarCurrentValue} token={this.props.token} search={this.search}/>
      {this.state.loading == true &&
        <Loading />
      }
      </div>
      );
  }
}

export default SearchApp;
