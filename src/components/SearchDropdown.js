import React, {Component} from 'react'
import SelectSearch from 'react-select';
import Trivia from './Triva'

class SearchDropdown extends Component {
  render() {
      let optionValues = Trivia.difficulty
    return (
     <div>
        <select>
             {optionValues}
        </select>
     </div>
  )
  }
}

export default SearchDropdown