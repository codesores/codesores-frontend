import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.setQuery = this.setQuery.bind(this)
  }

  setQuery(e){
    this.props.setQuery({language: e.target.value})
  }

  languageDropDown(){
    return this.props.languages.map((language)=>{
      return <option value={language}>{language}</option>
    })


  }

  render() {
    // console.log(this.props)
    return (
      <div className="SearchBar">
        <select name='language' onChange={this.setQuery} value={this.props.query}>
          {this.languageDropDown()}
        </select>
      </div>
      );
  }
}

export default SearchBar;
