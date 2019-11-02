import React from 'react'

const API = ({ trivia }) => {
  return (
    <div>
      {trivia.map((trivia) => (
        <div class="trivia">
          <div class="trivia-body">
            <h1 class="trivia-id">{trivia.id}</h1>
            <p class="trivia-answer">{trivia.answer}</p>
            <p class="trivia-question">{trivia.question}</p>
            <p class="trivia-value">{trivia.value}</p>
            <p class="trivia-airdate">{trivia.airdate}</p>
            <div clas="trivia-category">
                <p class="trivia-category-id">{trivia.category.id}</p>
                <p class="trivia-category-title">{trivia.category.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default API
