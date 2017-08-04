import React from 'react'
import { Link } from 'react-router-dom'
import FeedbackList from './FeedbackList'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import bug from '../../components/issue_icons/bug.svg'
import docs from '../../components/issue_icons/docs.svg'
import feature from '../../components/issue_icons/feature.svg'
import other from '../../components/issue_icons/other.svg'
import Button from 'react-toolbox/lib/button/Button';

class Summary extends React.Component {
  returnIcon(){
    let request_type = this.props.issue_type.scope;
    switch(request_type) {
      case "bug":
      return (
        <img width="35px" height="35px" src={bug} className="card-icon"/>
      );
      break;
      case "docs":
      return <img width="35px" height="35px" src={docs} className="card-icon"/>;
      break;
      case "feature":
      return <img width="35px" height="35px" src={feature} className="card-icon"/>;
      break;
      default:
      return <img width="35px" height="35px" src={other} className="card-icon"/>;
    }
  }

  render() {
    const icon = this.returnIcon();
    return (
      <div>
      <Card>
      <CardTitle
      avatar={this.returnIcon()}
      title={`Issue type: ${this.props.issue_type.scope}`}
      subtitle={`${this.props.language}`}
    />
   <CardTitle>
   <h4>
   Repo: <Link to={`${this.props.repo.url}`}>
     {this.props.repo.name}
     </Link>
   </h4>
   <p>
   <i>{this.props.repo.description}</i>
   </p>
   </CardTitle>
   <CardTitle
   title={this.props.issue.title}
   subtitle={`posted by: ${this.props.issue.author}`} />
   <CardText>{this.props.issue.body}</CardText>
   <CardActions>
      <Button href={this.props.issue.url} label="See details on GitHub" />
    </CardActions>
      </Card>
        <br/>
        <FeedbackList feedbacks={this.props.feedbacks} />
      </div>
    )

  }
}

export default Summary
