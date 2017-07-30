import { Link, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';

import ReactBootstrap from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const WelcomePage = ()=> (
 
    <Jumbotron>
      <h1> CodeSores </h1>
      <p> An app to help you find the right opportunities to contribute to open source projects </p>
      <p><Button href="/home" bsStyle="primary">Contribute</Button></p>
    </Jumbotron>
    
)

export default WelcomePage


