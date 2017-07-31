import React, { Component } from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(value){
    let new_state = {...this.state}
    this.props.query['language'] = value
    this.setState(new_state);
  };


  render() {
    return (
      <div className="search-bar">
      <Dropdown
        auto
        onChange={this.handleChange}
        source={this.props.language}
        value={this.props.searchBarCurrentValue.language}
      />
      </div>

    );
  }
}

export default SearchBar;
