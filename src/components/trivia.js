import React from 'react'

const Trivia = ({ trivia }) => {
  return (
    <div>
      <center><h1>Trivia List</h1></center>
      {trivia.map((question) => (
        <div class="question">
          <div class="question-body">
            <h5 class="question-id">{question.id}</h5>
            <h6 class="question-title">{question.title}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Trivia