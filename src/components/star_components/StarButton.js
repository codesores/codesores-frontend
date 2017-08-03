import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'
import liked from './liked.svg'
import not_liked from './not_liked.svg'



class StarButton extends React.Component {


  buttonConditional(){
    if (this.props.liked){
      return (
      <span onClick={this.props.setStar}>
        <img width="35px" height="25px" src={liked} color='red'/>
        
      </span> 
        )
    } else {
      return (
      <span onClick={this.props.setStar}>
        <img width="35px" height="25px" src={not_liked} color='red'  />
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
