import React from 'react'
import { Link } from 'react-router-dom'

class Summary extends React.Component {
  constructor(args){
    super(args)
  }

  render() {
    return (
      <div>
        <h1>{this.props.issue.repo_name}</h1>
        <h5>{this.props.issue.repo_description}</h5>
        <p>{this.props.issue.title}</p>
        <p> {this.props.issue.repo_language} </p> <br/>
        <p> Issue by: {this.props.issue.author}</p>
      </div>
    )

  }
}

export default Summary

