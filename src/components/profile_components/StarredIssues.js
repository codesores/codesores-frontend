import React from 'react'
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import axios from 'axios';
import bug from '../../components/issue_icons/bug.svg'
import docs from '../../components/issue_icons/docs.svg'
import feature from '../../components/issue_icons/feature.svg'
import other from '../../components/issue_icons/other.svg'
import { getCookie } from '../../utils';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('token');

class StarredIssues extends React.Component {

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

  sortRecentStars(stars){
    return stars.sort((a, b)=>{
      return new Date(b.created_at) - new Date(a.created_at);
    });


  }

  iterateStars(limit=10){
    let sortedStars = this.sortRecentStars(this.props.stars)

    let cappedStars = sortedStars.slice(0, limit).map((star) => {
      console.log('star', star)
      const issueUrl = "/issues/" + star.issue_id
      return (
        <span>
        <ListItem item={star} key={star.id}
        legend={star.issue.repo_name}
        caption={star.issue.title}
        rightIcon={this.returnIcon(star.issue)}
        selectable
        to={issueUrl + "?token=" + this.props.token}
        />

        </span>

        )
    })

    return cappedStars
  }

  starBox(){
    if (this.props.stars){
      return (
        <div>
        <h3 className="sub-tit-pro" > Starred Issues </h3>
        <List selectable ripple>
        <ListSubHeader/>
        {this.iterateStars(10)}
        </List>
        </div>
        )
    }
  }

  render(){
    console.log(this.props)
    return(
      <div>
      {this.starBox()}
      </div>
      )
  }
}


export default StarredIssues

