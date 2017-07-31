import React, {Component} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import IssuesShow from '../views/issues/show.js'
import IssuesIndex from '../views/issues/index.js'


class Main extends Component {

  render(){
    return (
    <main>
        <Switch>
<<<<<<< HEAD
          <Route exact path='/' render={routeProps => <Index setNotice={this.props.setNotice} token={this.props.token} />} />
          <Route path="/issues/:id" component={IssuesShow} token={this.props.token} />
=======
          <Route exact path='/' render={routeProps => <Index setNotice={this.props.setNotice}/>} />
          <Route path="/issues/:id" render={routeProps => <IssuesShow router={routeProps} setNotice={this.props.setNotice}/>} />         
>>>>>>> development
        </Switch>
    </main>
      )
  }
}

export default Main


<<<<<<< HEAD


// <Route path="/issues/:id" render={routeProps => <IssuesShow setNotice={this.props.setNotice}/>} />
=======
>>>>>>> development
