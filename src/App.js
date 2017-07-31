import React, {Component} from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Notice from './components/error_handling/Notice'
import axios from 'axios'
import { getQueryParams } from './utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();

    this.state = {
      token: params.token,
      notice: [],
      info: ""
    };

    this.fetchUserDetails();

    this.deleteToken = this.deleteToken.bind(this)
    this.deleteErrorsAfterView = this.deleteErrorsAfterView.bind(this)
    this.setNotice = this.setNotice.bind(this)
  }

  deleteToken() {
    this.setState({ token: null });
    window.location.href = window.location.href.replace(/\?.*$/, '');
  }

  deleteErrorsAfterView(){
    this.setState({notice: []})
  }

  fetchUserDetails() {
    let app = this;
    let userApiUrl = "http://localhost:3000/users?token=" + this.state.token
    // console.log(userApiUrl)
    fetch(userApiUrl).then(data => data.json()).then(function(response){
      // console.log(response)
      app.setState({info: response})
    }).catch(error => {
      // console.error('Could not fetch user details', error);
    });

  }

  setNotice(...errors){
    console.log(errors)
    this.setState({notice: errors})
  }

  render() {
    const info = this.state.info;
    return (
      <div>
        <Notice notice={ this.state.notice } deleteErrorsAfterView={ this.deleteErrorsAfterView }/>
        <Header token={this.state.token} logout={this.deleteToken}  userInfo={this.fetchUserDetails} info={info} />
        <Main setNotice={this.setNotice} token={this.state.token} info={info}/>
      </div>
    )
  }
}

export default App
