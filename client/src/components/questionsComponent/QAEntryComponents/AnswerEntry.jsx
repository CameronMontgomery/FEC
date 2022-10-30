import React, { useRef, useState } from 'react';
import AnswerFooter from './AnswerFooter.jsx';
import Modal from '../Modal.jsx';
import AddAnswer from '../ModalViews/addAnswerView.jsx';
import ImageView from '../ModalViews/ImageView.jsx';

const AnswerEntry = ({ answer }) => {
  const modal = useRef(null)
  const [currentPhoto, setCurrentPhoto] = useState(null)

  return (
  <>
  <div className="QA-answer-entry-container">
    <div className="QA-answer-body" data-testid="answerBody">
      {answer.body}
    </div>
    <>
    {answer.photos.length !== 0 ? answer.photos.map((photo, i) => {
        return <img src={photo} key={i} className="QA-answer-img" data-testid="answerImage" alt="Pictures provided by poster" onClick={e => {
          setCurrentPhoto(photo)
          modal.current.open()
        }}/>
      }) : null}
    </>
    <AnswerFooter answer={answer}/>
  </div>
  <Modal ref={modal} >
    <ImageView photo={currentPhoto}/>
  </Modal>
  </>
  )
}

export default AnswerEntry;
