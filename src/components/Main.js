import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import IssuesShow from '../views/issues/show.js'
import IssuesIndex from '../views/issues/index.js'
import WelcomePage from '../views/WelcomePage.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/home' component={Index}/>
      <Route path="/issues/:id" component={IssuesShow}/>
    </Switch>
  </main>
  )

export default Main
