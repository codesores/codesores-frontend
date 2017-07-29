import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import IssuesShow from '../views/issues/show.js'
import IssuesIndex from '../views/issues/index.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/index' component={Index}/>
      <Route exact path='/issues' component={IssuesIndex}/>
      <Route path="/issues/:id" component={IssuesShow}/>
    </Switch>
  </main>
)

export default Main
