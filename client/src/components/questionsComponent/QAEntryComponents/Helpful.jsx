import React, { useState } from 'react';
import axios from 'axios';

// Takes an 2 arguments the first is the helpfulness count and the second is an options object with type, either questions
// or answers and id of the question or answer.
const Helpful = ({ helpfulCount, options }) => {
  const [marked, setMarked] = useState(false)
  const [count, setCount] = useState(helpfulCount)

  const increaseHelpfulCount = () => {
    axios.put(`api/qa/${options.type}/${options.id}/helpful`, undefined)
      .then(res => {
        setMarked(true);
        setCount(count + 1)
      })
      .catch(err => console.log('Can\'t mark helpful', err.message))
  }

  const markHelpful = () => {
    if (!marked) {
      return increaseHelpfulCount()
    }
    console.log('Already Marked as Helpful')
  }

  return (
    <span className="QA-helpful-btn" role="button" data-testid="helpfulBtn" onClick={e => markHelpful()}>Helpful? <span className="QA-helpful-yes">Yes</span>({count})</span>
  )
}

export default Helpful;