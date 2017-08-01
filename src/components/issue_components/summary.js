import React from 'react'
import { Link } from 'react-router-dom'

class Summary extends React.Component {
  constructor(args){
    super(args)
  }

  render() {
    console.log("Props.issue: ", this.props.issue)
    return (
      <div>
        <h1>Repo: {this.props.issue.repo_name}</h1>
        <h5>Desc: {this.props.issue.repo_description}</h5>
        <p>Issue title: {this.props.issue.title}</p>
        <p>Issue Lang {this.props.issue.repo_language} </p> <br/>
        <p> Issue by: {this.props.issue.author}</p>
      </div>
    )

  }
}

export default Summary

