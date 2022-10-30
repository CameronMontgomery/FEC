import React from 'react';
import { format, parseISO } from 'date-fns';
import Helpful from './Helpful.jsx';
import ReportBtn from './ReportBtn.jsx';

const AnswerFooter = ({ answer }) => {

  return (
    <div className="QA-answer-footer">
      <span className="QA-answer-by-date">by <span style={{fontWeight: answer.answerer_name.toLowerCase() === 'seller' ? 'bold' : 400}}>{answer.answerer_name}</span>, {format(parseISO(answer.date), 'MMM d\, YYY')}</span>
      |<Helpful className="QA-answer-helpful" helpfulCount={answer.helpfulness} options={{type: 'answers', id: answer.id}} />
      |<ReportBtn options={{type: 'answers', id: answer.id}} />
    </div>
  )
}

export default AnswerFooter;