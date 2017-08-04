import React, { Component } from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import bug from '../../components/issue_icons/bug.svg'
import docs from '../../components/issue_icons/docs.svg'
import feature from '../../components/issue_icons/feature.svg'
import other from '../../components/issue_icons/other.svg'


class PastFeedback extends Component {

  returnIcon(element){
    let request_type = element.request_type_id;
    switch(request_type) {
      case 1:
      return (
        <img width="45px" height="45px" src={bug} className="card-icon-large"/>
      );
      break;
      case 2:
      return <img width="45px" height="45px" src={docs} className="card-icon-large"/>;
      break;
      case 3:
      return <img width="45px" height="45px" src={feature} className="card-icon-large"/>;
      break;
      default:
      return <img width="45px" height="45px" src={other} className="card-icon-large"/>;
    }
  }

  sortRecentFeedbacks(feedbacks){
    return feedbacks.sort((a, b)=>{
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }

  iterateFeedbacks(limit=10){
    let sortedFeedback = this.sortRecentFeedbacks(this.props.feedbacks)

    let cappedFeedback = sortedFeedback.slice(0, limit).map((feedback) => {
      console.log('feedback', feedback)
      const issueUrl = "/issues/" + feedback.issue_id
      const validity = feedback.validity
      const difficulty = feedback.difficulty

      const all_types = ['', 'Bug', 'Docs', 'Feature', 'Other']
      const type = all_types[feedback.request_type_id]
      return (
        <div className="user-profile-card">
        <ListItem item={feedback} key={feedback.id}
        caption={feedback.issue.title}
        legend={`Validity: ${validity} Difficulty: ${difficulty} Type: ${type}`}
        rightIcon={this.returnIcon(feedback.issue)}
        selectable
        to={issueUrl + "?token=" + this.props.token}
        />
        </div>
        )
    })
    return cappedFeedback
  }

  feedbackBox(){
    if (this.props.feedbacks){
      return (
        <div className="user-profile-section">
        <div>
        <h3 className="sub-tit-pro">You have given feedback on:</h3>
        </div>
        <div className = "user-profile-card-section">
        <List selectable ripple>
        <ListSubHeader />
        {this.iterateFeedbacks(5)}
        </List>
        </div>
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
