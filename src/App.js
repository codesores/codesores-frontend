import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import axios from 'axios'
import { getQueryParams } from './utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
    this.deleteToken = this.deleteToken.bind(this)
  }

  deleteToken() {
    this.setState({ token: null })
  }

  render() {
    return (
      <div>
        <Header 
          loggedIn={ this.state.token ? true : false }
          logout={ this.deleteToken }
        />
        <Main />
      </div>
    )
  }
}

export default App
