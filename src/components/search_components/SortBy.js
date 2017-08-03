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
      <div>
      <Button label='Comment Count' onMouseUp={() => this.props.updateSortBy('commentCount')} raised primary />
      <Button label='Issue Count' onMouseUp={() => this.props.updateSortBy('issueCount')} raised primary />
      </div>
    )
  }
}

export default SortBy;
