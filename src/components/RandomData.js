import React, {Component} from 'react'
import API from './API'
import Random from './Random'

class CategoryData extends Component {
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
      <div>
      <API trivia={this.state.trivia} /> 
      </div>
    )
  }
}

export default CategoryData