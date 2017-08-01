import React from 'react'
import axios from 'axios'
import Header from '../../components/Header.js'
import {Grid, Row, Col} from 'react-bootstrap'


import Summary from '../../components/issue_components/summary.js'
import Feedback from '../../components/issue_components/feedback.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'

class UsersShow extends React.Component {

  constructor(){
    super()
  }


  render(){
    const info = this.props.info
    console.log(info)

    return(
      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div id='issue_id'>
                <h1> {info.name} </h1>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id='feedback'><br/>
                <a href={info.html_url}>GitHub Page</a><br/><br/>
              </div>
            </Col>
          </Row>
      </Grid>
      )
  }
}


export default UsersShow

