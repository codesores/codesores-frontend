import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'
import liked from './favorite.svg'
import not_liked from './not_liked.svg'


class StarButton extends React.Component {

  buttonConditional(){
    if (this.props.liked){
      return (
      <div onClick={this.props.setStar} className="like-button">
        <img width="20px" height="20px" src={liked}/>
        <span className="star-text">Added to favorites</span>
      </div>
        )
    } else {
      return (
      <div onClick={this.props.setStar} className="like-button" >
        <img width="20px" height="20px" src={not_liked} />
        <span className="star-text">Add to favorites</span>
      </div>
        )
    }
  }

  render(){
    return(
      <div>
      {this.buttonConditional()}
      </div>
    )
  }
}


export default StarButton
