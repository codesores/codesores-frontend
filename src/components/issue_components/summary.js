import React from 'react'

class Summary extends React.Component {
  constructor(args){
    super(args)

  }

  render() {
    return (
      <div>
      <p>id: {this.props.issue.id}</p>
      <p>author: {this.props.issue.author}</p>
      <p>title: {this.props.issue.title}</p>
      <p>repo_name: {this.props.issue.repo_name}</p>
      <p>repo_owner: {this.props.issue.repo_owner}</p>
      <p>repo_owner: {this.props.issue.repo_language}</p>
      <p>repo_owner: {this.props.issue.repo_description}</p>
      </div>
    )

  }
}

export default Summary


