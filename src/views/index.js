import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'


class Index extends React.Component {
  constructor(args){
    super(args)
    this.state = {
      results: {data: []}
    }

    this.updateResults = this.updateResults.bind(this)
  }

  updateResults(response){
    this.setState({results: response})
  }

  render(){
    return(
      <div>
      <SearchApp results={this.state.results} updateResults={this.updateResults}/>
      </div>
      )
  }
}


export default Index