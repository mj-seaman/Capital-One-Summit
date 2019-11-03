import React, {Component} from 'react'
import '/Users/jeanineseaman/my-app/src/styles/Button.css'


class SearchButton extends Component {
    /*constructor(props) {
        super(props)
        this.state = { 
            trivia: [],
            displayRandom: false
        }
    }
    
    displayRandom = () => {
        this.setState({
            displayRandom: !this.state.displayRandom
        })
    }
    render () {
        let trivia = this.state.trivia
        if ( this.state.displayRandom ) {
            trivia = (
                <div>
                    <RandomData key={trivia.id}
                    title={trivia.id} />
                </div>
            )
        }*/
        render () {
        return (
            <div className = 'Button'>
                <button>Search Trivia</button>
            </div>
        )
    }
}
export default SearchButton

