// Third-party Packages
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// Modules
import parseQuestions from './lib/parseQuestions.js'
import QuestionSearch from './QuestionSearch.jsx';
import AddQuestionBar from './AddQuestionBar.jsx';
import QAList from './QAList.jsx';
import './styles.css'

const Question = ({ product }) => {
  // State for getting and storing questions for the product
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [loading, setLoading] = useState(true);
  // View count for number of questions to display in QAList & Boolean to render more question btn
  const [viewCount, setViewCount] = useState(2);
  const [showButton, setShowButton] = useState(false);
  const [productInfo, setProductInfo] = useState({});

  // Sets product info to pass to AddQuestion component
  useEffect(() => setProductInfo({
    id: product.id,
    name: product.name
  }), [product]);

  // Gets and sorts questions for product, sets questions, filteredQuestions, and productInfo
  useEffect(() => {
    setLoading(true);
    axios.get(`api/qa/questions`, {
      params: {
        product_id: product.id,
        count: 100
      }
    })
      .then(res => {
        let parsedQuestions = parseQuestions(res.data);
        if (parsedQuestions.length > viewCount) {
          setShowButton(true);
        }
        setQuestions(parsedQuestions);
        setFilteredQuestions(parsedQuestions);
        setLoading(false);
      })
      .catch(err => console.log('Error: ', err.message))
  }, [])

  // Filters questions by query provided by QuestionSearch component
  const filterQuestions = (query) => {
    if (query.length >= 3) {
      let filteredQuestions = questions.filter((question => {
        let pattern = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let queryRegEx = new RegExp(pattern, 'ig');

        if (queryRegEx.test(question.question_body)) {
          return question
        }
      }))
      return setFilteredQuestions(filteredQuestions)
    }
    return setFilteredQuestions(questions)
  }

  // Adjusts the viewCount (number of questions rendering) used in QAList
  const adjustQuestionViewCount = () => {
    let numQuestions = filteredQuestions.length;
    if (numQuestions >= viewCount + 2) {
      setViewCount(viewCount + 2)
    } else if (numQuestions === viewCount + 1) {
      setViewCount(viewCount + 1)
    }
  }

  // Controls whether the the button to load more questions is shown
  useEffect(() => {
    if (viewCount === filteredQuestions.length) {
      setShowButton(false)
    } else if (viewCount > filteredQuestions.length) {
      setViewCount(2)
    }

    if (viewCount < filteredQuestions.length) {
      setShowButton(true)
    }
  }, [viewCount, filteredQuestions])

  return (
    <section className="question-parent-container">
      <div className="question-header">Question & Answers</div>
      <QuestionSearch searchHandler={filterQuestions}/>
      { loading ? null : <QAList questions={filteredQuestions} productInfo={productInfo} viewCount={viewCount} />}
      <AddQuestionBar productInfo={productInfo} loadQuestionsHandler={adjustQuestionViewCount} showButton={showButton}/>
    </section>
  )
}

export default Question;