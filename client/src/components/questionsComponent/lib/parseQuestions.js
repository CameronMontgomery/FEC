
// This function takes in the initial response from questions, and the number of wanted answers and parses both the questions
// and answers ordering them in order of helpfulness. It also converts answers from an object of objects to an array of answers.
const parseQuestions = (questionsResponse, answerCount) => {
  let questions = questionsResponse.results

  questions.sort((a, b) => (a.question_helpfulness > b.question_helpfulness) ? -1 : 1);

  questions.map((question) => {
    question.answers = Object.values(question.answers);
    question.answers.sort((a, b) => (a.helpfulness > b.helpfulness) ? -1 : 1)
    if (answerCount && question.answers.length > answerCount) {
      question.answers = question.answers.slice(0, answerCount)
    }
  })

  return questions
}

export default parseQuestions;