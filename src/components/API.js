import React from 'react'

const API = ({ trivia }) => {
  return (
    <div>
      {trivia.map((trivia) => (
        <div class="trivia">
          <div class="trivia-body">
            <h4>Difficulty: </h4>
            <p class="trivia-value">{trivia.value}</p>
            <div clas="trivia-category">
            <h4>Category: </h4>
                <p class="trivia-category-title">{trivia.category.title}</p>
            </div>
            <h4>Trivia: </h4>
            <p class="trivia-question">{trivia.question}</p>
            <h4>Answer: </h4>
            <p class="trivia-answer">{trivia.answer}</p>
            <h4>Airdate:</h4>
            <p class="trivia-airdate">{trivia.airdate}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default API
