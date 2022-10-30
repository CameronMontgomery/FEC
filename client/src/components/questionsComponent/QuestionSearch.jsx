import React, { useState } from 'react';

const QuestionSearch = ({ searchHandler }) => {
  const [query, setQuery] = useState('');

  const search = (event) => {
    setQuery(event.target.value);
    searchHandler(query);
  }

  return (
    <div className={"QA-search-container"}>
      <input onChange={(e => search(e))} value={query} type="text" className="question-input" placeholder="Have a question? Search for answers" />
      <span id="search-icon">🔍</span>
    </div>
  )
}

export default QuestionSearch;