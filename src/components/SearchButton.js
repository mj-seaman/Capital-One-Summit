import React, {Component} from 'react'
import Data from './Data'
import '/Users/jeanineseaman/my-app/src/styles/Button.css'


class SearchButton extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            trivia: [],
            display: false
        }
    }
    
    display = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render () {
        let trivia = this.state.trivia
        if ( this.state.display ) {
            trivia = (
                <div>
                    <Data key={trivia.id}
                    title={trivia.id} />
                </div>
            )
        }
        return (
            <div className = 'Button'>
                <button onClick={this.display}>Show all Trivia</button> {trivia}
            </div>
        )
    }
}
export default SearchButton

