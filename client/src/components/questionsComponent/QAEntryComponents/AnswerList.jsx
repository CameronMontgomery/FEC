import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswerList = ({ answers }) => {
  const [count, setCount] = useState(2);

  const adjustCount = () => {
    if (count === 2) {
      setCount(answers.length);
    } else if (count === answers.length) {
      setCount(2);
    }
  };

  return (
    <div className="QA-answer-list">
      { answers.length > 0 ? answers.map((answer, i) => {
          if (i < count) return (<AnswerEntry answer={answer} key={answer.id} />)
          })
            : <div className="QA-no-answers">Be the first to respond</div> }
      {
        answers.length > count ? <button className="QA-load-answers-btn" onClick={adjustCount}>See More Answers</button>
        : (count === answers.length && answers.length > 2) ? <button className="QA-collapse-answers-btn" onClick={adjustCount}>Collapse Answers</button>
        : null
      }
    </div>
  )
}

export default AnswerList;