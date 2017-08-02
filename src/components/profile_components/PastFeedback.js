import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class PastFeedback extends Component {
 
  sortRecentFeedbacks(feedbacks){
    return feedbacks.sort((a, b)=>{
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }

  iterateFeedbacks(limit=10){
    let sortedFeedback = this.sortRecentFeedbacks(this.props.feedbacks)

    let cappedFeedback = sortedFeedback.slice(0, limit).map((feedback) => {
      const issueUrl = "/issues/" + feedback.issue_id
      return (
        <li item={feedback} key={feedback.id}>
        <Link to={issueUrl}>Issue</Link>
        <div>Validity: {feedback.validity}</div>
        <div>Difficulty: {feedback.difficulty}</div>
        </li>
        )
    })
    return cappedFeedback
  }

  feedbackBox(){
    if (this.props.feedbacks){
      return (
        <div>
        <p> Past Feedbacks: </p>
        {this.iterateFeedbacks(5)}
        </div>
        )
    }
  }

  render() {
    return (
      <div>
      {this.feedbackBox()}
      </div>
      );
  }
}

export default PastFeedback;
