import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'
import IconButton from 'react-toolbox/lib/button/Button'
import FontIcon from 'react-toolbox/lib/font_icon';


class StarApp extends React.Component {

  constructor(){
    super()
    this.state = {
      starred: false
    }

    this.setStar = this.setStar.bind(this)
  }

  setStar(){
    if (this.state.starred === false){
      this.setState({starred:true})
    } else {
      this.setState({starred:false})
    }
  }

  postApi(){
    
  }

  render(){
    return(
      <div>
      <IconButton onClick={this.setStar} icon='favorite' />
      </div>
      )
  }
}


export default StarApp

