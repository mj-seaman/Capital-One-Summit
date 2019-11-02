import React, {Component} from 'react'
import SearchDropdown from './components/SearchDropdown'
import Trivia from './components/Triva'

class App extends Component {
  render() {
  return (
    <div>
      <Trivia/>
    </div>
  )
  }
}

export default App
/*import CategoryDropdown from './components/CategoryDropdown'
import DateDropdown from './components/DateDropdown'
import DifficultyDropdown from './components/DifficultyDropdown'
import CategoryInput from './components/CategoryInput'

class App extends Component {
  render () {
    return (
      <div>
        <center><h1>Jeopardy! Trivia Search</h1></center>
        <center><h2>Select Search Criteria</h2></center>
        <DateDropdown />
        <CategoryDropdown />
        <DifficultyDropdown />
      </div> 
    )
  }
}

export default App */
