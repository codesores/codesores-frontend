import React from 'react'

class FeedbackList extends React.Component {
  average(nums) {
    return nums.reduce((sum, num)=> sum + num) / nums.length
  }

  render() {
    return (
      <div className="feedback-list">
        <h3>Issue Stats</h3>
        <ul>
          <li>
            Response Count: {this.props.feedbacks.count}
          </li>
          <li>
            Average Validity Rating: {this.props.feedbacks.average_validity}
          </li>
          <li>
            Average Difficulty Rating: {this.props.feedbacks.average_difficulty}
          </li>
        </ul>
      </div>
    )
  }
}

export default FeedbackList
