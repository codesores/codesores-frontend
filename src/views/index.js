import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'
import SearchResults from '../components/search_components/SearchResults.js'
import SortBy from '../components/search_components/SortBy.js'
import Header from '../components/Header.js'
import LoginButton from '../components/LoginButton'


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
    this.setState({sortBy: {[toggleValue]: true}})
    this.sortResultsBy(toggleValue)
  }

  updateResults(response){
    this.setState({resultsPurgatory: response})
    this.sortResultsBy()
  }

  sortResultsBy(toggleValue){
    let sortedArray = []
    let sortBy = toggleValue
    if(sortBy) {
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
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
      <div className="full-bleed">
      <div className="project-name">
      <h1 id='title'>CodeSores</h1>
      </div>
      <div className="project-description">
      <h2 id='subtitle'>Help out your favorite open source projects and become a better developer while doing it.</h2>
      <br />
      <p>Want to contribute, but not sure where to start? Easily find the right issue that suits your interests and level with CodeSores.</p>
      </div>
      <div className='full-bleed-cta'><LoginButton token={this.props.token} /></div>
      </div>
      <SearchApp updateResults={this.updateResults} setNotice={this.props.setNotice} token={this.props.token} />
      <main id='search-results'>
      <SortBy updateSortBy={this.updateSortBy}/>
      <SearchResults resultsToDisplay={this.state.resultsToDisplay} token={this.props.token} />
      </main>
      </div>
    )
  }

}


export default Index
