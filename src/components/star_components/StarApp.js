import React from 'react'
import axios from 'axios'
import Button from 'react-toolbox/lib/button/Button'
import IconButton from 'react-toolbox/lib/button/Button'
import FontIcon from 'react-toolbox/lib/font_icon';
import qs from 'qs'
import StarButton from './StarButton.js'


class StarApp extends React.Component {

  constructor(){
    super()
    this.state = {
      liked: null
    }

    this.setStar = this.setStar.bind(this)
    this.render = this.render.bind(this)
  }

  setStar(){
    if (this.state.liked === false){
      this.setState({liked: true},this.createStar())
    } else {
      this.setState({liked: false},this.deleteStar())
    }
  }

  createStar(){
    let starApp = this

    let params = qs.stringify({
      token: this.props.token,
      issue_id: this.props.issue.id,
      liked: this.state.liked
    })

    axios.post("http://localhost:3000/stars/create",params).then((response)=>{
    }).catch((error)=>{
    })

    const fakePush = {
      user_id: this.props.info.id,
      issue_id: this.props.issue.id
    }
    this.props.info.stars.push(fakePush)
  }

  deleteStar(){
    let starApp = this

    let params = qs.stringify({
      token: this.props.token,
      issue_id: this.props.issue.id,
      liked: this.state.liked
    })

    axios.post("http://localhost:3000/stars/delete",params).then((response)=>{
    }).catch((error)=>{
    })
  }

  shouldComponentUpdate(nextProp){
    this.setState({liked: this.userHasLiked(nextProp)})
    return true
  }

  userHasLiked(props) {
    if ( props.issue.stars){
      const match = props.issue.stars.find(function (star) {
        return star.user_id === props.info.id
      })
      return !!match
    }
  }

  render(){
    return(
      <span>
      <StarButton liked={this.state.liked} setStar={this.setStar}/>
      </span>
      )
  }
}

export default StarApp