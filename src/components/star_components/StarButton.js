import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'


class StarButton extends React.Component {


  buttonConditional(){
    if (this.props.liked){
      return (
      <button onClick={this.props.setStar}>
        Unlike
      </button> 
        )
    } else {
      return (
      <button onClick={this.props.setStar}>
        Like
      </button>
        )
    }
  }

  render(){
    console.log('props:',this.props)
    return(
      <div>
      {this.buttonConditional()}
      </div>
    )
  }
}


export default StarButton
