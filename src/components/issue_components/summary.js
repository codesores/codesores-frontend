import React from 'react'
import { Link } from 'react-router-dom'

class Summary extends React.Component {
  constructor(args){
    super(args)
    console.log("Props.issue: ", this.props.issue)
  }

  render() {
    return (
      <div>
        <h1>Repo: {this.props.issue.name}</h1>
        <h5>Desc: {this.props.issue.description}</h5>
        <p>Issue title: {this.props.issue.title}</p>
      {/*
        <p>Issue Lang: {this.props.issue} </p> <br/>
        <p> Issue by: {this.props.issue.author}</p>
        */}
      </div>
    )

  }
}

export default Summary

