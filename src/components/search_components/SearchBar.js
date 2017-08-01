import React, { Component } from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import Input from 'react-toolbox/lib/input';
import Slider from 'react-toolbox/lib/slider';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, key_hash){
    this.props.setQuery(key_hash, value);
  }

  render() {
    return (
      <div className="search-bar">
      <Dropdown
        auto
        onChange={(value) => this.handleChange(value, 'language')}
        source={this.props.languages}
        value={this.props.searchBarCurrentValue['language']}
      />
      <Input type='text' label='Keywords' name='keywords' value={this.props.searchBarCurrentValue['keywords']} onChange={(value) => this.handleChange(value, 'keywords')} maxLength={36} />
      <Slider pinned min={0} max={5} step={1} value={this.props.searchBarCurrentValue['difficulty']} onChange={(value) => this.handleChange(value, 'difficulty')} />
      </div>

    )
  }
}

export default SearchBar;
