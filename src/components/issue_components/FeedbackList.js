import React from 'react'

class FeedbackList extends React.Component {
  average(nums) {
    return nums.reduce((sum, num)=> sum + num) / nums.length
  }

  render() {
    let responseCount = 0
    let validity = "N/A"
    let difficulty = "N/A"
    if(typeof this.props.feedbacks === 'array'){
      responseCount = this.props.feedbacks.length
      let validity = this.average(this.props.feedbacks.map(feedback => feedback.validty))
      let difficulty = this.average(this.props.feedbacks.map(feedback => feedback.validty))
    }
    return (
      <div className="feedback-list">
        <h3>Issue Stats</h3>
        <ul>
          <li>
            Response Count: {responseCount}
          </li>
          <li>
            Average Validity Rating: {validity}
          </li>
          <li>
            Average Difficulty Rating: {difficulty}
          </li>
        </ul>
      </div>
    )
  }
}

export default FeedbackList
