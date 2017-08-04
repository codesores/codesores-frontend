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
      <Button label='Assignee Count' onMouseUp={() => this.props.updateSortBy('assignee_count')} raised primary />
      <Button label='Comment Count' onMouseUp={() => this.props.updateSortBy('comment_count')} raised primary />
      <Button label='Issue Created At' onMouseUp={() => this.props.updateSortBy('issue_created_at')} raised primary />
      <Button label='Participant Count' onMouseUp={() => this.props.updateSortBy('participant_count')} raised primary />
      <Button label='Stars Count' onMouseUp={() => this.props.updateSortBy('stars_count')} raised primary />
      </div>
    )
  }
}

export default SortBy;
