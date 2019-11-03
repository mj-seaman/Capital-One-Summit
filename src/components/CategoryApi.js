import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions

/*import React, {Component} from 'react'


const ValueApi = ({ trivia }) => {
  return (
    <div>
      {trivia.map((trivia) => (
              <div>
                <p> {trivia.category.title} </p> 
              </div>
      ))}
    </div>
  )
};

export default ValueApi
*/