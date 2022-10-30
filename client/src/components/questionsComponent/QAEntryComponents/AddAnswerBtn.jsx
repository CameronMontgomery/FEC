import React, { useRef } from 'react';
import Modal from '../Modal.jsx';
import AddAnswer from '../ModalViews/addAnswerView.jsx';

const AddAnswerBtn = ({productInfo, question }) => {
  const modal = useRef(null);

  return (
    <>
     <span className="QA-entry-add-answer-btn" data-testid="addAnswerBtn" onClick={e => modal.current.open()} role="button">Add Answer</span>
      <Modal ref={modal} >
        <AddAnswer productInfo={productInfo} question={question} close={() => {
          modal.current.close()
        }}/>
      </Modal>
    </>
  )
}

export default AddAnswerBtn;