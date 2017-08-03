import React, { Component } from 'react'
import ProgressBar from 'react-toolbox/lib/progress_bar';


class Loading extends Component {

  render() {
    return (
       <ProgressBar mode='indeterminate'/>
    )
  }
}

export default Loading;
