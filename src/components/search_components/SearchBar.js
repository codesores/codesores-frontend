import React, { Component } from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value){
    this.props.setQuery({language: value});
  }

  render() {
    return (
      <div className="search-bar">
      <Dropdown
        auto
        onChange={this.handleChange}
        source={this.props.languages}
        value={this.props.searchBarCurrentValue['language']}
      />
      </div>

    )
  }
}

export default SearchBar;
