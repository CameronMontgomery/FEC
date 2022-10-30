import React, { useRef } from 'react';
import Modal from './Modal.jsx';
import AddQuestion from './ModalViews/AddQuestionView.jsx';

const AddQuestionBar = ({ loadQuestionsHandler, productInfo, showButton, refresh }) => {
  const modal = useRef(null);

  return (
    <>
    <div className="QA-add-question-bar">
      <button className="QA-more-questions-btn" style={{display: showButton ? 'inline-block' : 'none' }} onClick={loadQuestionsHandler} data-testid="loadQuestionsBtn">MORE ANSWERED QUESTIONS</button>
      <button className="QA-add-question-btn" onClick={e => modal.current.open()} data-testid="addQuestionBtn">ADD A QUESTION +</button>
    </div>
    <Modal ref={modal} >
      <AddQuestion productInfo={productInfo} close={() => {
        modal.current.close()
      }}/>
    </Modal>
    </>
  )
};

export default AddQuestionBar;