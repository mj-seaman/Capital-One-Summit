import React, {Component} from 'react';
import Trivia from './components/trivia'
import Dropdown from './components/Dropdown'
import './App.css';

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

export default App;
*/

class App extends Component {
  constructor(){
  super()
  this.state = {
    search: [
      {
        id: 0,
        title: 'Date Aired',
        selected: false,
        key: 'search'
      },
      {
        id: 1,
        title: 'Category',
        selected: false,
        key: 'search'
      },
      {
        id: 2,
        title: 'Difficulty',
        selected: false,
        key: 'search'
      },
    ]
  }
}

toggleSelected = (id, key) => {
  let temp = JSON.parse(JSON.stringify(this.state[key]))
  temp[id].selected = !temp[id].selected
  this.setState({
    [key]: temp
  })
}

resetThenSet = (id, key) => {
  let temp = JSON.parse(JSON.stringify(this.state[key]))
  temp.forEach(item => item.selected = false);
  temp[id].selected = true;
  this.setState({
    [key]: temp
  })
}

render() {
  return (
    <div className="App">
      <center><h1>Trivia Question Search</h1></center>
      <p>Search through all Jeopardy! trivia questions by: </p>
      <div className="wrapper">
        <Dropdown
          title="Select Search Criteria"
          list={this.state.search}
          resetThenSet={this.resetThenSet}
        />
      </div>
    </div>
  );
}
}

export default App;