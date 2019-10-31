import React, {Component} from 'react'
import Dropdown from './Dropdown'

class DifficultyDropdown extends Component{
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
          title: '100',
          selected: false,
          key: 'search'
        },
        {
            id: 2,
            title: '200',
            selected: false,
            key: 'search'
        },
        {
            id: 3,
            title: '300',
            selected: false,
            key: 'search'
        },
        {
            id: 4,
            title: '400',
            selected: false,
            key: 'search'
        },
        {
            id: 5,
            title: '500',
            selected: false,
            key: 'search'
        },
        {
            id: 6,
            title: '600',
            selected: false,
            key: 'search'
        },
        {
            id: 7,
            title: '700',
            selected: false,
            key: 'search'
        },
        {
            id: 8,
            title: '800',
            selected: false,
            key: 'search'
        },
        {
            id: 9,
            title: '900',
            selected: false,
            key: 'search'
        },
        {
            id: 10,
            title: '1000',
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
                title="Difficulty"
                list={this.state.search}
                resetThenSet={this.resetThenSet}
            />
        </div>
      </div>
    )
  }
}

export default DifficultyDropdown