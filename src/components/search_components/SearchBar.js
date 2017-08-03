import React, { Component } from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import Input from 'react-toolbox/lib/input'
import Slider from 'react-toolbox/lib/slider'
import Checkbox from 'react-toolbox/lib/checkbox'
import Autocomplete from 'react-toolbox/lib/autocomplete'
import Button from 'react-toolbox/lib/button/Button'


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
      <div id="search-bar">
      <h1>Search</h1>

      <Autocomplete
               direction="down"
               onChange={(value) => this.handleChange(value, 'language')}
               label="Choose Languages"
               source={this.props.languages}
               value={this.props.searchBarCurrentValue['language']}
      />

      <Slider label='difficulty' min={0} max={5} step={1} value={this.props.searchBarCurrentValue['difficulty']} onChange={(value) => this.handleChange(value, 'difficulty')} />
      <Checkbox checked={!this.props.searchBarCurrentValue['difficulty']} label="don't filter by difficulty" onChange={(value) => this.handleChange(0, 'difficulty')} />
      <Input type='text' label='Keywords' name='keywords' value={this.props.searchBarCurrentValue['keywords']} onChange={(value) => this.handleChange(value, 'keywords')} maxLength={36} />
      <Checkbox checked={this.props.searchBarCurrentValue.documentation} label="show documentation" onChange={(value) => this.handleChange(value, 'documentation')} />
      <Checkbox checked={this.props.searchBarCurrentValue.bugs} label="show bugs" onChange={(value) => this.handleChange(value, 'bugs')}/>
      <Checkbox checked={this.props.searchBarCurrentValue.features} label="show features" onChange={(value) => this.handleChange(value, 'features')} />
      <Checkbox checked={this.props.searchBarCurrentValue.other} label="other" onChange={(value) => this.handleChange(value, 'other')} />
      <Button label='search' onMouseUp={this.props.search} raised primary />
      </div>
    )
  }
}

export default SearchBar;
