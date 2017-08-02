import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'


class StarButton extends React.Component {


  buttonConditional(){
    if (this.props.liked){
      return (
      <button onClick={this.props.setStar}>
        Unstar
      </button> 
        )
    } else {
      return (
      <button onClick={this.props.setStar}>
        Star
      </button>
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
