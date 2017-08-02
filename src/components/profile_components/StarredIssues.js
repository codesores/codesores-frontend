import React from 'react'
import { Link } from 'react-router-dom'

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
        <li item={star} key={star.id}>
        <Link to={issueUrl}>Issue</Link>
        </li>
        )
    })

    return cappedStars
  }

  starBox(){
    if (this.props.stars){
      return (
        <div>
        <p> Past Stars: </p>
        {this.iterateStars(20)}
        </div>
        )
    }
  }

  render(){
    return(
      <div>
      {this.starBox()}
      </div>
      )
  }
}


export default StarredIssues

