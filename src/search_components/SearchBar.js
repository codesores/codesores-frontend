import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.changeSearchQuery = this.changeSearchQuery.bind(this);
  }

  changeSearchQuery(e){
    this.props.changeSearchQuery(e.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <input type="text" className="search-query" onChange={this.changeSearchQuery} value={this.props.query}/>
      </div>
    );
  }
}

export default SearchBar;
