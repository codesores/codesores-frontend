import React from 'react'
import axios from 'axios'
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
    this.userHasLiked = this.userHasLiked.bind(this)
  }

  setStar(){
    if (this.state.liked === false){
      this.setState({liked: true},this.createStar())
    } else {
      this.setState({liked: false},this.deleteStar())
    }
  }

  createStar(){
    let params = qs.stringify({
      token: this.props.token,
      issue_id: this.props.issue.id,
      liked: this.state.liked
    })

    axios.post(process.env.REACT_APP_HOST + "/stars/create",params).then((response)=>{
    }).catch((error)=>{
    })

    const fakePush = {
      user_id: this.props.info.id,
      issue_id: this.props.issue.id
    }
    this.props.info.stars.push(fakePush)
  }

  deleteStar(){
    let params = qs.stringify({
      token: this.props.token,
      issue_id: this.props.issue.id,
      liked: this.state.liked
    })

    axios.post(process.env.REACT_APP_HOST + "/stars/delete",params).then((response)=>{
    }).catch((error)=>{
    })
  }

  shouldComponentUpdate(nextProp){
    this.setState({liked: this.userHasLiked(nextProp)})
    return true
  }

  userHasLiked(props) {
    if ( props.stars){
      const match = props.stars.find(function (star) {
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
