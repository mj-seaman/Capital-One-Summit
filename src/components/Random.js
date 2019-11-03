import React, {Component} from 'react'
import RandomData from './RandomData'
import '/Users/jeanineseaman/my-app/src/styles/Button.css'

class Random extends Component {
    constructor(props) {
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
        }
        return (
            <div className = 'Button'>
                <button onClick={this.displayRandom}>Get Random Trivia</button> {trivia}
            </div>
        )
    }
}

export default Random