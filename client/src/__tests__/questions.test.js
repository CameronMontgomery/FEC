import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../components/questionsComponent/Question.jsx';
import QAList from '../components/questionsComponent/QAList.jsx';
import parseQuestions from '../components/questionsComponent/lib/parseQuestions.js';
import axios from 'axios';

// Create a mock for axios
jest.mock('axios')

const dummyProduct = {
  "id": 66648,
  "campus": "hr-rfc",
  "name": "Blues Suede Shoes",
  "slogan": "2019 Stanley Cup Limited Edition",
  "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
  "category": "Dress Shoes",
  "default_price": "120.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z"
}

const dummyQuestions = {
  "product_id": "66648",
  "results": [
        {
            "question_id": 583180,
            "question_body": "Why is this product cheaper here than other sites?",
            "question_date": "2019-02-04T00:00:00.000Z",
            "asker_name": "l33tgamer",
            "question_helpfulness": 16,
            "reported": false,
            "answers": {
                "5988755": {
                    "id": 5988755,
                    "body": "This is a new answer",
                    "date": "2022-10-19T00:00:00.000Z",
                    "answerer_name": "jack543!",
                    "helpfulness": 1,
                    "photos": []
                },
                "5988933": {
                    "id": 5988933,
                    "body": "test",
                    "date": "2022-10-23T00:00:00.000Z",
                    "answerer_name": "tester",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 643171,
            "question_body": "does adding question work?",
            "question_date": "2022-09-08T00:00:00.000Z",
            "asker_name": "selina",
            "question_helpfulness": 3,
            "reported": false,
            "answers": {
                "5988311": {
                    "id": 5988311,
                    "body": "testing answer",
                    "date": "2022-09-08T00:00:00.000Z",
                    "answerer_name": "Selina",
                    "helpfulness": 0,
                    "photos": [
                        "https://res.cloudinary.com/dwl50vubn/image/upload/v1662652656/c9rv8dmuou0pzlcktiqb.png"
                    ]
                },
                "5988742": {
                    "id": 5988742,
                    "body": "this is my fake answer",
                    "date": "2022-10-19T00:00:00.000Z",
                    "answerer_name": "jack543!",
                    "helpfulness": 0,
                    "photos": [
                        "https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_x6KcgVcOe.png"
                    ]
                }
            }
        },
        {
            "question_id": 583178,
            "question_body": "What fabric is the top made of?",
            "question_date": "2019-08-18T00:00:00.000Z",
            "asker_name": "coolkid",
            "question_helpfulness": 30,
            "reported": false,
            "answers": {
                "5448540": {
                    "id": 5448540,
                    "body": "Something pretty soft but I can't be sure",
                    "date": "2019-09-18T00:00:00.000Z",
                    "answerer_name": "warmkid",
                    "helpfulness": 2,
                    "photos": []
                },
                "5448551": {
                    "id": 5448551,
                    "body": "Its the best! Seriously magic fabric",
                    "date": "2019-09-18T00:00:00.000Z",
                    "answerer_name": "warmkid",
                    "helpfulness": 2,
                    "photos": []
                }
            }
        },
        {
            "question_id": 593277,
            "question_body": "what up doc?",
            "question_date": "2022-04-15T00:00:00.000Z",
            "asker_name": "doctor",
            "question_helpfulness": 2,
            "reported": false,
            "answers": {
                "5988934": {
                    "id": 5988934,
                    "body": "🥕",
                    "date": "2022-10-23T00:00:00.000Z",
                    "answerer_name": "Bugs",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 643170,
            "question_body": "testing question feature!",
            "question_date": "2022-09-08T00:00:00.000Z",
            "asker_name": "selina",
            "question_helpfulness": 1,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 643497,
            "question_body": "What is the purpose of this product?",
            "question_date": "2022-10-19T00:00:00.000Z",
            "asker_name": "jackson11!",
            "question_helpfulness": 3,
            "reported": false,
            "answers": {
                "5988932": {
                    "id": 5988932,
                    "body": "To be sold to people that will pay more than the value",
                    "date": "2022-10-23T00:00:00.000Z",
                    "answerer_name": "seller",
                    "helpfulness": 0,
                    "photos": []
                }
            }
        },
        {
            "question_id": 643674,
            "question_body": "Where's the beef",
            "question_date": "2022-10-23T00:00:00.000Z",
            "asker_name": "Arby's",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        }
  ]
}

const dummyQuestionsWithImage = {
  "product_id": "66648",
  "results": [
    {
      "question_id": 583180,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2019-02-04T00:00:00.000Z",
      "asker_name": "l33tgamer",
      "question_helpfulness": 1,
      "reported": false,
      "answers": {
        "5988755": {
            "id": 5988755,
            "body": "This is a new answer",
            "date": "2022-10-19T00:00:00.000Z",
            "answerer_name": "jack543!",
            "helpfulness": 1,
            "photos": []
        },
        "5988933": {
            "id": 5988933,
            "body": "test",
            "date": "2022-10-23T00:00:00.000Z",
            "answerer_name": "tester",
            "helpfulness": 0,
            "photos": []
        }
      }
    },
    {
      "question_id": 643171,
      "question_body": "does adding question work?",
      "question_date": "2022-09-08T00:00:00.000Z",
      "asker_name": "selina",
      "question_helpfulness": 3,
      "reported": false,
      "answers": {
        "5988311": {
            "id": 5988311,
            "body": "testing answer",
            "date": "2022-09-08T00:00:00.000Z",
            "answerer_name": "Selina",
            "helpfulness": 0,
            "photos": [
                "https://res.cloudinary.com/dwl50vubn/image/upload/v1662652656/c9rv8dmuou0pzlcktiqb.png"
            ]
        },
        "5988742": {
            "id": 5988742,
            "body": "this is my fake answer",
            "date": "2022-10-19T00:00:00.000Z",
            "answerer_name": "jack543!",
            "helpfulness": 1,
            "photos": [
                "https://ik.imagekit.io/answeraye/fake-stamp-vector-grunge-rubber-260nw-1049845097_x6KcgVcOe.png"
            ]
        }
      }
    }
  ]
}

describe('Question and Answers Component Render and Functionality', () => {
  describe('Question Component/Sub Component Render and Functionality', () => {
    // Before each test in describe block handle React Portal and API Mock w/ cleanup.
    beforeAll(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element;
      });
      // Declare axios response when encountering axios.get
      axios.get.mockResolvedValue({ data: dummyQuestions });
    });
    afterEach(() => {
      ReactDOM.createPortal.mockClear();
      cleanup()
    });

    it("Should render Question without crashing", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(() => {
        expect(screen.getByText('Question & Answers')).toBeInTheDocument();
      })
    });
    it("Should render input to search questions", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(() => {
        expect(screen.getByPlaceholderText('Have a question? Search for answers')).toBeInTheDocument();
      })
    });
    it("Should render questions in list", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(() => {
        expect(screen.getByTestId('questionsList')).toBeInTheDocument()
      })
    });
    it("Should render 2 questions after loading", async () => {
      render(<Question product={dummyProduct}/>);
      const questionInstances = await waitFor(() => screen.findAllByTestId('questionBody'))
      expect(questionInstances).toHaveLength(2)
    });
    it("Should render answers in list", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(() => {
        expect(screen.getByTestId('questionsList')).toBeInTheDocument()
      })
    });
    it("Should render 2 answers per question after loading", async () => {
      render(<Question product={dummyProduct}/>);
      const answerInstances = await waitFor(() => screen.findAllByTestId('answerBody'))
      expect(answerInstances).toHaveLength(4)
    });
    it("Should render button to add questions", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(() => {
        expect(screen.getByTestId('loadQuestionsBtn')).toBeInTheDocument()
      })
    });
    it("Should render 2 more questions when More Answered Questions button is pressed", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(async () => {
        const moreQuestionsBtn = screen.getByTestId('loadQuestionsBtn')
        fireEvent.click(moreQuestionsBtn);
        const questionInstances = await waitFor(() => screen.findAllByTestId('questionBody'))
        expect(questionInstances).toHaveLength(4)
      })
    });
    it("Should open modal prompting user to enter question when Add A Question button", async () => {
      render(<Question product={dummyProduct}/>);
      await waitFor(async () => {
        const addQuestionBtn = screen.getByTestId('addQuestionBtn')
        fireEvent.click(addQuestionBtn);
        await waitFor(() => {
          expect(screen.getByText('Ask Your Question')).toBeInTheDocument()
        })
      });
    })
    it("Should render helpful button for each question and answer", async () => {
      render(<Question product={dummyProduct}/>);
      const helpfulInstances = await waitFor(() => screen.getAllByTestId("helpfulBtn"))
      expect(helpfulInstances).toHaveLength(6)
    })
    it("Should render report button for each answer", async () => {
      render(<Question product={dummyProduct}/>);
      const reportInstances = await waitFor(() => screen.getAllByTestId("reportBtn"))
      expect(reportInstances).toHaveLength(4)
    })
    it("Should change report button text from report to reported", async () => {
      render(<Question product={dummyProduct}/>);
      const [ firstReportInstance ] = await waitFor(() => screen.getAllByTestId("reportBtn"))
      axios.put.mockResolvedValue(() => Promise.resolve({status: 200}));
      fireEvent.click(firstReportInstance)
      await waitFor(() => {
        expect(firstReportInstance).toHaveTextContent('Reported')
      })
    })
  });

  describe('Question and Answers Modal Component and Views', () => {
    // Before each test in describe block handle React Portal w/ cleanup.
    beforeAll(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
        return element;
      });
      axios.get.mockResolvedValue({ data: dummyQuestions });
    });
    afterEach(() => {
      ReactDOM.createPortal.mockClear();
      cleanup()
    });

    it("Should open modal with enlarged image", async () => {
      axios.get.mockResolvedValue({ data: dummyQuestionsWithImage });
      render(<Question product={dummyProduct}/>);
      await waitFor(async () => {
        const [ firstImage ] = await screen.getAllByTestId('answerImage');
        fireEvent.click(firstImage)
        await waitFor(() =>  expect(screen.getByTestId('modalImage')).toBeInTheDocument())
      })
    })
    it("Should open modal prompting user to enter question when Add A Question button", async () => {
      axios.get.mockResolvedValue({ data: dummyQuestions });
      render(<Question product={dummyProduct}/>);
      await waitFor(async () => {
        const addQuestionBtn = screen.getByTestId('addQuestionBtn')
        fireEvent.click(addQuestionBtn);
        await waitFor(() => {
          expect(screen.getByText('Ask Your Question')).toBeInTheDocument()
        })
      });
    })
    it("Should open modal prompting user to answer a question when \"Add answer\"", async () => {
      axios.get.mockResolvedValue({ data: dummyQuestionsWithImage });
      render(<Question product={dummyProduct}/>);
      await waitFor(async () => {
        const [ firstAddAnswerBtn ] = screen.getAllByTestId('addAnswerBtn')
        fireEvent.click(firstAddAnswerBtn);
        await waitFor(() => {
          expect(screen.getByText('Submit your answer')).toBeInTheDocument()
        })
      });
    })
  })
});
