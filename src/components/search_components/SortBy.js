import React, { Component } from 'react'
import Button from 'react-toolbox/lib/button/Button'
import Dropdown from 'react-toolbox/lib/dropdown';


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

      let that = this
      return (
              <Dropdown
                auto
                label='Sort By'
                onChange={that.handleChange}
                source={sortTypes}
                value={that.state.value}
              />
            );

          }
  }

export default SortBy;
