import React, { Component } from 'react'
import Errors from './Errors'

class Notice extends React.Component {

    showNoticesIfAny() {
      if(this.props.notice.length > 0){ return( <Errors errors={ this.props.notice } deleteErrorsAfterView={ this.props.deleteErrorsAfterView }/> ) }
    }

    render(){
      return(
        <div id='Notice'>
          { this.showNoticesIfAny() }
        </div>
      )
    }
}

export default Notice
