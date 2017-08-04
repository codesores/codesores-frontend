import React from 'react'
import SearchApp from '../components/search_components/SearchApp.js'
import SearchResults from '../components/search_components/SearchResults.js'
import Header from '../components/Header.js'
import LoginButton from '../components/LoginButton'
import SortBy from '../components/search_components/SortBy.js'


class Splash extends React.Component {
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
    this.updateSortByDescending = this.updateSortByDescending.bind(this)
  }

  updateSortBy(toggleValue){
    this.setState({sortBy: {[toggleValue]: true}})
    this.sortResultsBy(toggleValue)
  }

  updateSortByDescending(){
    this.setState({sortByDescending: !this.state.sortByDescending})
    this.sortResultsBy()
  }

  updateResults(response){
    this.setState({resultsPurgatory: response})
    this.sortResultsBy()
  }


  sortResultsBy(toggleValue){
    console.log(this.state.sortByDescending)
    let sortedArray = []
    let sortBy = toggleValue
    if(sortBy && !this.state.sortByDescending) {
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
        return a[sortBy] - b[sortBy]
      })
    }
    else if(sortBy && this.state.sortByDescending) {
      sortedArray = this.state.resultsPurgatory.sort(function(a, b){
        return b[sortBy] - a[sortBy]
      })
    }

    else{sortedArray = this.state.resultsPurgatory }

    let new_resultsToDisplay = sortedArray;
    this.setState({resultsToDisplay: new_resultsToDisplay})

  }

  render(){

    return(
      <div className='splash'>
      <div>
      <div><img className='centering' height="100" width="100" src='https://image.flaticon.com/icons/svg/172/172808.svg' /></div>
      <h1 id='title'>OpenSores</h1>
      </div>
      <div >
      <h2 id='subtitle'>Help out your favorite open source projects and become a better developer while doing it.</h2>
      <br />
      <h5 id="splash">Want to contribute, but not sure where to start? Easily find the right issue that suits your interests and level with CodeSores.</h5>
      </div>
      <br />
      <br />
      <div className='login'><LoginButton className='centering' token={this.props.token} /></div>
      </div>

    )
  }

}


export default Splash
