import React, {Component} from 'react'
import API from './API'

class RandomData extends Component {
  state = {
    trivia: []
  }
  componentDidMount() {
    fetch('http://jservice.io/api/random')
      .then(res => res.json())
      .then((data) => {
        this.setState({ trivia: data })
      })
      .catch(console.log)
  }
  render () {
    return( 
      <API trivia={this.state.trivia} /> 
    )
  }
}

export default RandomData