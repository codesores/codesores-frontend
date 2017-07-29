import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'
import SearchResults from '../components/search_components/SearchResults.js'


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
      <SearchApp updateResults={this.updateResults}/>
      <SearchResults results={this.state.results} />
      </div>
      )
  }
}


export default Index