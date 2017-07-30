import React, { Component } from 'react'

class Errors extends React.Component {

  constructor(args){
    super(args)
    this.returnErrors = this.returnErrors.bind(this)
  }

   returnErrors(){

    return this.props.errors.map( function(error, idx){
      return( <div key={idx}> { error } </div> )
    })
  }

  shouldComponentUpdate(){
    this.props.deleteErrorsAfterView()
    return true
  }

  render(){
    return(
      <div>
      { this.returnErrors() }
      </div>
    )
  }
}

export default Errors
