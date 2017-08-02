import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Starred Issues' />
    <ListItem
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
      rightIcon=''
    />
    <ListItem
      caption='Ozymandias'
      legend='Adrian Veidt'
      rightIcon=''
    />
    <ListItem
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
      rightIcon=''
    />
  </List>
);

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

