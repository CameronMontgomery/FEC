import React, { useState } from 'react';
import QAEntry from './QAEntry.jsx';

const QAList = ({ questions, productInfo, viewCount }) => {
  return (
    <div className="QA-question-list" data-testid="questionsList">
      { !questions.length ? null :
          questions.map((question, i) => {
            if (i < viewCount) return <QAEntry question={question} productInfo={productInfo} key={question.question_id} />
          })}
    </div>
  )
}

export default QAList;