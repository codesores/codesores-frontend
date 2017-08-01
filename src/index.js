import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';



ReactDOM.render((
  <Router>
  <ThemeProvider theme={theme}>
  <div>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
  <App exact path='/' component={App}/>
  </div>
  </ThemeProvider>
  </Router>

  ), document.getElementById('root'));
registerServiceWorker();
