import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'
import liked from './favorite.svg'
import not_liked from './not_liked.svg'


class StarButton extends React.Component {

  buttonConditional(){
    if (this.props.liked){
      return (
      <span onClick={this.props.setStar} className="like-button">
        <img width="55px" height="55px" src={liked}/>
      </span> 
        )
    } else {
      return (
      <span onClick={this.props.setStar} className="like-button" >
        <img width="55px" height="55px" src={not_liked} />
      </span>
        )
    }
  }

  render(){
    return(
      <span>
      {this.buttonConditional()}
      </span>
    )
  }
}


export default StarButton
