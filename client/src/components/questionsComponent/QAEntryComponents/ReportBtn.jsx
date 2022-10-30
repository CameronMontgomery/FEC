import React, { useState } from 'react';
import axios from 'axios';

// Takes an options object with type, either questions or answers and the id.
const ReportBtn = ({ options }) => {
  const [reported, setReported] = useState(false);

  const sendReport = () => {
    axios.put(`api/qa/${options.type}/${options.id}/report`, undefined)
      .then(() => setReported(true))
      .catch(err => console.log('Error reporting: ', err.message))
  }

  const reportAnswer = () => {
    if (!reported) {
      return sendReport()
    }
    console.log('Already Reported')
  }

  return (
    <span className="QA-report" role="button" data-testid="reportBtn" onClick={e => {
      reportAnswer();
    }
      }>{reported ? 'Reported' : 'Report'}</span>
  )
}

export default ReportBtn;