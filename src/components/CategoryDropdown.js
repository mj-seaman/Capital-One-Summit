import React, {Component} from 'react'
import Dropdown from './Dropdown'
import CategoryInput from './CategoryInput'

class CategoryDropdown extends Component{
  constructor(){
    super()
    this.state = {
      search: [
        {
          id: 0,
          title: 'Any',
          selected: false,
          key: 'search'
        },
        {
          id: 1,
          title: 'Input Keyword',
          selected: false,
          key: 'search'
        }
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
  
  render () {
    return (
      <div className="">
        <div className="wrapper">
            <Dropdown
                title="Category"
                list={this.state.search}
                resetThenSet={this.resetThenSet}
            />
        </div>
      </div>
    )
  }
}

export default CategoryDropdown