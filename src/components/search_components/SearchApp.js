import React, { Component } from 'react';
import SearchBar  from './SearchBar';
import axios from 'axios';
import querystring from 'querystring';

class SearchApp extends Component {

  constructor(props){
    super(props)
    this.state = {
<<<<<<< Updated upstream
      searchBarCurrentValue: { language: "All" },
=======
      searchBarCurrentValue: {
        language: 'pick a language',
        keywords: '',
        difficulty: 1,
        type: {
          documentation: true,
          bugs: true
        }
      },
>>>>>>> Stashed changes
      languages: [],
    }
    
    this.setQuery = this.setQuery.bind(this);
    this.languageDropDown = this.languageDropDown.bind(this);
  }

  componentDidMount(){
    this.callInitialize();
  }

  languageDropDown(languages){
    let languages_array = []
    languages.map((language)=> languages_array.push({value: language, label: language}))
    return languages_array
  }

  callInitialize(){
    //calls api to recover languages
    let searchApp = this
    let apiUrl = "http://localhost:3000/issues/start/?token=" + this.props.token

    axios.get(apiUrl).then((response)=>{
      let language_array = this.languageDropDown(response.data)
      searchApp.setState({languages: language_array})
      searchApp.props.setNotice([]) // TODO -- WHAT DOES THIS DO?
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover languages")
    })
  }

  callSearch(){
    //calls api to display issues from query
    let searchApp = this
    let query = querystring.stringify(this.state.searchBarCurrentValue)
    let apiUrl = "http://localhost:3000/issues/search/?token=" + this.props.token + "&" + query

    axios.post(apiUrl).then((response)=>{
      searchApp.props.updateResults(response.data)
      searchApp.props.setNotice([])
    }).catch((error)=>{
      searchApp.props.setNotice(error.toString(), "Couldn't recover issues")
    })
  }

  setQuery(key_hash, value){
    this.state.searchBarCurrentValue[key_hash] = value
    this.forceUpdate()
    console.log(this.state.searchBarCurrentValue)
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
