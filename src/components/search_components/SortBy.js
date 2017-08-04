import React, { Component } from 'react'
import Button from 'react-toolbox/lib/button/Button'
import Dropdown from 'react-toolbox/lib/dropdown';
import Switch from 'react-toolbox/lib/switch/Switch';

class SortBy extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {value: ''}

    }

    handleChange(value){
      this.setState({value: value});
      this.props.updateSortBy(value)
    }


  render() {

    const sortTypes = [
      { value: 'comment_count', label: 'Comment Count' },
      { value: 'stars_count', label: 'Stars Count' }
    ]

      return (
        <div>
              <Switch
              checked={this.props.sortByDescending}
              label="sort by descending"
              onChange={this.props.updateSortByDescending}
              />

              <Dropdown
                auto
                label='Sort By'
                onChange={this.handleChange}
                source={sortTypes}
                value={this.state.value}
              />

              </div>
            );

          }
  }

export default SortBy;
