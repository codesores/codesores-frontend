import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import createHistory from 'history/createBrowserHistory'

class StarredIssues extends React.Component {

  sortRecentStars(stars){
    return stars.sort((a, b)=>{
      return new Date(b.created_at) - new Date(a.created_at);
    });


  }

  iterateStars(limit=10){
    let sortedStars = this.sortRecentStars(this.props.stars)

    let cappedStars = sortedStars.slice(0, limit).map((star) => {
      const issueUrl = "/issues/" + star.issue_id
      return (
        <span>
        <ListItem item={star} key={star.id}
        caption='Issue'
        legend={star.issue_id}
        rightIcon=''
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
        <List selectable ripple>
        <ListSubHeader caption='Starred Issues' />
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

