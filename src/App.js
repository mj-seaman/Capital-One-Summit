import React, {Component} from 'react';
import Trivia from './components/trivia'
import './App.css';

class App extends Component {
  render () {
    return (
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
