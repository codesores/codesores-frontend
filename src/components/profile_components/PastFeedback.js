import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class PastFeedback extends Component {
  constructor(){
    super()

  }

  iterateFeedbacks(limit=10){

    if (this.props.feedbacks){
      let feedback_list = this.props.feedbacks.slice(0, limit).map((feedback) => {
        const issueUrl = "/issues/" + feedback.issue_id
        return (
          <li item={feedback} key={feedback.id}>
            <Link to={issueUrl}>Issue</Link>
            <div>Validity: {feedback.validity}</div>
            <div>Difficulty: {feedback.difficulty}</div>
          </li>
          )
      })

      return (
        <div>
        <p> Past Feedbacks: </p>
        {feedback_list}
        </div>
        )
    }

  }

  render() {
    console.log(this.props)
    return (
      <div>
      {this.iterateFeedbacks()}
      </div>
      );
  }
}

export default PastFeedback;
