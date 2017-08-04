import React, { Component } from 'react'
import { Grid, Row, Col  } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import bug from '../../components/issue_icons/bug.svg'
import docs from '../../components/issue_icons/docs.svg'
import feature from '../../components/issue_icons/feature.svg'
import other from '../../components/issue_icons/other.svg'
import Button from 'react-toolbox/lib/button/Button';
import { CSSTransitionGroup } from 'react-transition-group'

class SearchResults extends Component {

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

  returnIssueTypeName(element){
    let request_type = element.request_type_id;
    switch(request_type) {
      case 1:
      return "bug";
      break;
      case 2:
      return "docs";
      break;
      case 3:
      return "feature";
      break;
      default:
      return "other";
    }
  }

  renderIssue(element){
    const icon = this.returnIcon(element);
    const issueTypeName = this.returnIssueTypeName(element);
    const issueLink = `/issues/${element.id}`
    const IssueButton = withRouter(({history}) => (
      <Button
        raised
        accent
        onClick={() => { history.push(issueLink) }}
        >
        Help categorize this issue!
      </Button>
    ))
    return(
      <div className="search-card-results">
        <Card>
        <div className="search-card-inner">
        <CardTitle
        avatar={icon}
        title={issueTypeName}
        subtitle={`${element.language.language}`}>
        <h5>
        Repo: <Link to={element.repo.url}>{element.repo.name}</Link>
        </h5>
        </CardTitle>
        <CardTitle
        title={element.title}
        subtitle={`posted by: ${element.author}`}>
        <p>{element.label}</p>
        <ul>
        <li>{`Comment count: ${element.comment_count}`}</li>
        <li>{`Assignee count: ${element.assignee_count}`}</li>
        <li>{`Participant count: ${element.participant_count}`}</li>
        <li>{`Stars count: ${element.stars_count}`}</li>
        </ul>
        </CardTitle>
        <CardTitle>
        <IssueButton />
        </CardTitle>
        </div>
        </Card>
      </div>
    )
  }


  render() {

    return (
      <ul className='issue-deck'>
      { this.props.resultsToDisplay.map((result, idx) =>
        <CSSTransitionGroup
          transitionName='issue'
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeave={false}>
          <li>{this.renderIssue(result)}</li>
          </CSSTransitionGroup>
        )
         }
      </ul>
    );
  }
}

export default SearchResults;
