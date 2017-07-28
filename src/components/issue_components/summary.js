import React from 'react'

class Summary extends React.Component {

  render() {
    return (
      <h1>{this.props.issue.summary}</h1>
    )

  }
}

export default Summary