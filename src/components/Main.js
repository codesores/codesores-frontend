import React, {Component} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import IssuesShow from '../views/issues/show.js'
import IssuesIndex from '../views/issues/index.js'
import UsersShow from '../views/users/show.js'


class Main extends Component {

  render(){
    return (
      <main>
      <Switch>
        <Route exact path='/' render={routeProps => <Index setNotice={this.props.setNotice} token={this.props.token} />} />
        <Route path="/issues/:id" render={routeProps => <IssuesShow info={this.props.info} router={routeProps} setNotice={this.props.setNotice} token={this.props.token} />} />
        <Route exact path='/users/:id' render={routeProps => <UsersShow info={this.props.info} router={routeProps} setNotice={this.props.setNotice} token={this.props.token} />} />
      </Switch>
      </main>
    )
  }
}

export default Main
