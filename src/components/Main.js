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
          <Route exact path='/' render={routeProps => <Index setNotice={this.props.setNotice}/>} />
          <Route path="/issues/:id" component={IssuesShow}/>
        </Switch>
    </main>
      )
  }

}

export default Main
