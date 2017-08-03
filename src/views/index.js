import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'
import SearchResults from '../components/search_components/SearchResults.js'
import SortBy from '../components/search_components/SortBy.js'
import Header from '../components/Header.js'

import Jumbotron from 'react-bootstrap/lib/Jumbotron';


class Index extends React.Component {
  constructor(args){
    super(args)
    this.state = {
      resultsPurgatory: [],
      resultsToDisplay: [],
      sortBy: {
        commentCount: true,
        issueCount: false,
        dateCreated: false
      }
    }
    this.updateResults = this.updateResults.bind(this)
    this.sortResultsBy = this.sortResultsBy.bind(this)
    this.updateSortBy = this.updateSortBy.bind(this)
  }

  updateSortBy(toggleValue){
    

    this.setState({})
  }


  updateResults(response){
    this.setState({resultsPurgatory: response})
    this.sortResultsBy()
  }

  sortResultsBy(){

    let sortedArray = []

    if(this.state.sortBy.commentCount) {
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
        return a.comment_count - b.comment_count
      })
    }

    else if(this.state.sortBy.issueCount){
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
        return a.issue_count - b.issue_count
      })
    }

    let new_resultsToDisplay = this.state.resultsToDisplay.concat(sortedArray);
    this.setState({resultsToDisplay: new_resultsToDisplay})

  }

  render(){

    return(
      <div>
      <SearchApp updateResults={this.updateResults} setNotice={this.props.setNotice} token={this.props.token} />
      <SearchResults resultsToDisplay={this.state.resultsToDisplay} token={this.props.token} />
      <SortBy updateSortBy={this.updateSortBy}/>
      </div>
    )
  }

}


export default Index
