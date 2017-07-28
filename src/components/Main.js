import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../views/index.js'
import Issues from '../views/issues/show.js'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/index' component={Index}/>
      <Route path='/issues' component={Issues}/>
    </Switch>
  </main>
)

export default Main
