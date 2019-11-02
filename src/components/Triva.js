import React, {Component} from 'react'
import API from './API'


class Trivia extends Component {
  render () {
    return( 
      <API trivia={this.state.trivia} /> 
  )
}
  state = {
    trivia: []
  }
  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(res => res.json())
      .then((data) => {
        this.setState({ trivia: data })
      })
      .catch(console.log)
  }
}

export default Trivia;


