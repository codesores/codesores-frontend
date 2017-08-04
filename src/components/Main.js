import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import Splash from '../views/splash.js'
import IssuesShow from '../views/issues/show.js'
import UsersShow from '../views/users/show.js'


class Main extends Component {

  render(){
    return (
      <main>
      <div id='container'>
      <Switch>
        <Route exact path='/search' render={routeProps => <Index setNotice={this.props.setNotice} token={this.props.token} />} />
        <Route exact path='/' render={routeProps => <Splash setNotice={this.props.setNotice} token={this.props.token} />} />
        <Route path="/issues/:id" render={routeProps => <IssuesShow info={this.props.info} router={routeProps} setNotice={this.props.setNotice} token={this.props.token} />} />
        <Route exact path='/users/:id' render={routeProps => <UsersShow info={this.props.info} router={routeProps} setNotice={this.props.setNotice} token={this.props.token} fetchUser={this.props.fetchUser} />} onEnter={this.props.fetchUser}/>
      </Switch>
      </div>
      </main>
    )
  }
}

export default Main



