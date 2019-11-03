import React, {Component} from 'react'
import Searches from './components/Searches'
import Random from './components/Random'
import SearchButton from './components/SearchButton'
import './App.css'

class App extends Component {
  render() {
  return (
    <div className= 'App'>
      <center><h1>Jeopardy! Trivia Search</h1></center>
      <center><h2>Select Search Criteria</h2></center>
      <Searches/>
      <SearchButton/>
      <Random/>
    </div>
  )
  }
}

export default App
