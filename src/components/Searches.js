import React, {Component} from 'react'
import value from './value'
import year from './year'
import month from './month'
import day from './day'
import category from './category'
import AutoCompleteText from './AutoCompleteText'

class SearchCategory extends Component {
  render () {
    return (
      <div>
        <p> Enter Category:</p>
        <AutoCompleteText items={ category } /> 
        <p> Enter Difficulty:</p>
        <AutoCompleteText items={ value }/>
        <p> Enter Year:</p>
        <AutoCompleteText items={ year }/>
        <p> Enter Month:</p>
        <AutoCompleteText items={ month }/>
        <p> Enter Day:</p>
        <AutoCompleteText items={ day }/>
      </div>
    )
  }
}

export default SearchCategory