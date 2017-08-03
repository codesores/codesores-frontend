import React, { Component } from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';


class PastFeedback extends Component {
 
  sortRecentFeedbacks(feedbacks){
    return feedbacks.sort((a, b)=>{
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }

  iterateFeedbacks(limit=10){
    let sortedFeedback = this.sortRecentFeedbacks(this.props.feedbacks)

    let cappedFeedback = sortedFeedback.slice(0, limit).map((feedback) => {
      console.log(feedback)
      const issueUrl = "/issues/" + feedback.issue_id
      const validity = feedback.validity
      const difficulty = feedback.difficulty

      const all_types = ['', 'Bug', 'Docs', 'Feature', 'Other']
      const type = all_types[feedback.request_type_id]
      return (
        <span>
        <ListItem item={feedback} key={feedback.id}
        caption={feedback.issue_id}
        legend={`Validity: ${validity} Difficulty: ${difficulty} Type: ${type}`}
        selectable
        to={issueUrl + "?token=" + this.props.token}
        />
        </span>
        )
    })
    return cappedFeedback
  }

  feedbackBox(){
    if (this.props.feedbacks){
      return (
        <div>
        <List selectable ripple>
        <ListSubHeader caption='Past Feedback' />
        {this.iterateFeedbacks(5)}
        </List>
        </div>
        )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
      {this.feedbackBox()}
      </div>
      );
  }
}

export default PastFeedback;
