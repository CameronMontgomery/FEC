import React, { useState, useEffect} from 'react';

const Helpful = (props) => {
  const [marked, setMarked] = useState(false);

  function setHelpful() {
    if (!marked) {
      setMarked(true)
    }
  }

  return (
    <>
      { !marked ? <small>Helpful? <u onClick={() => setHelpful()}>Yes</u> ({props.data}) | <u>Report</u></small> : <small>Helpful? <u onClick={() => setHelpful()}>Yes</u> ({props.data + 1}) | <u>Report</u></small>}
    </>
  )
}

export default Helpful;