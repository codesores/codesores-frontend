import { Link, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';

import ReactBootstrap from 'react-bootstrap';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';


const RepoSnippets = ()=> (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}><br/>{'sample repo highlights'}</Col>
      <Col sm={6} md={3}><br/>{'sample repo highlights'}</Col>
      <Col sm={6} md={3}><br/>{'sample repo highlights'}</Col>
      <Col sm={6} md={3}><br/>{'sample repo highlights'}</Col>
    </Row>
  </Grid>
);

export default RepoSnippets


