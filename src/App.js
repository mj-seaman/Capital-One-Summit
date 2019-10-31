import React, {Component} from 'react'
import CategoryDropdown from './components/CategoryDropdown'
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
export default App



/*class App extends Component {
  render () {
  return( 
  <Trivia trivia={this.state.trivia} /> 
  )
}
  state = {
    trivia: []
  }
  componentDidMount() {
    fetch('http://jservice.io/api/categories')
    .then(res => res.json())
    .then((data) => {
      this.setState({ trivia: data })
    })
    .catch(console.log)
  }
}

export default App;*/