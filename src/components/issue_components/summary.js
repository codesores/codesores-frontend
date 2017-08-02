import React from 'react'
import { Link } from 'react-router-dom'
import FeedbackList from './FeedbackList'

class Summary extends React.Component {
  constructor(args){
    super(args)
    console.log("repo:", this.props.repo)
  }

  render() {
    return (
      <div>
        <h1 className={this.props.repo.url}>
        <Link to={`${this.props.repo.url}`}>
          {this.props.repo.name}
          </Link>
        </h1>
        <p><b>{this.props.language.language} </b>
        <i>{this.props.repo.description}</i></p> <br/>
        <p>Issue title: {this.props.issue.title}</p>
        <p> Issue by: {this.props.issue.author}</p>
        <FeedbackList feedbacks={this.props.feedbacks} />
      </div>
    )

  }
}

export default Summary

