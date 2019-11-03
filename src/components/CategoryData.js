import React, {Component} from 'react'
import API from './API'

class CategoryData extends Component {
  state = {
    category: []
  }
  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(res => res.json())
      .then((data) => {
        this.setState({ category: data })
      })
      .catch(console.log)
  }
  render () {
    return( 
      <API trivia={this.state.category} /> 
    )
  }
}

export default CategoryData