import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Link, Switch, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage.js'


ReactDOM.render((
  <Router>
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <App exact path='/home' component={App}/>
      </Switch>
    </div>
  </Router>

  ), document.getElementById('root'));
registerServiceWorker();
