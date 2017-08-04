import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'
import SearchResults from '../components/search_components/SearchResults.js'
import SortBy from '../components/search_components/SortBy.js'
import Header from '../components/Header.js'


class Index extends React.Component {
  constructor(args){
    super(args)
    this.state = {
      resultsPurgatory: [],
      resultsToDisplay: [],
      sortBy: {},
      sortByDescending: true
    }
    this.updateResults = this.updateResults.bind(this)
    this.sortResultsBy = this.sortResultsBy.bind(this)
    this.updateSortBy = this.updateSortBy.bind(this)
  }

  updateSortBy(toggleValue){
    new Promise(()=>(this.setState({sortBy: {[toggleValue]: true}}))).then(
      this.sortResultsBy())
  }

  updateResults(response){
    this.setState({resultsPurgatory: response})
    this.sortResultsBy()
  }

  sortResultsBy(){
    let sortedArray = []
    let sortBy = Object.keys(this.state.sortBy)[0]
    console.log(sortBy)
    if(sortBy) {
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
        console.log(a[sortBy])
        return a[sortBy] - b[sortBy]
      })
    }

    else{sortedArray = this.state.resultsPurgatory }

    let new_resultsToDisplay = sortedArray;
    this.setState({resultsToDisplay: new_resultsToDisplay})
  }

  render(){

    return(
      <div>
      <aside>
      <SearchApp updateResults={this.updateResults} setNotice={this.props.setNotice} token={this.props.token} />
      </aside>
      <main id='search-results'>
      <SortBy updateSortBy={this.updateSortBy}/>
      <SearchResults resultsToDisplay={this.state.resultsToDisplay} token={this.props.token} />
      </main>
      </div>
    )
  }

}


export default Index
