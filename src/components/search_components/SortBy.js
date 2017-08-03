import React, { Component } from 'react'
import Button from 'react-toolbox/lib/button/Button'


class SortBy extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, key_hash){
    this.props.setQuery(key_hash, value);
  }

  render() {
    return (
      <Button label='search' onMouseUp={this.props.updateSortBy} raised primary />
    )
  }
}

export default SortBy;
