import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm.jsx'

const Modal = (props) => {
  const { showModal, name } = props;

  return (
    <div className="reviews-modal">
      <div className="reviews-modal-content">
        <div className="reviews-modal-header">
          <div>
            <h4>Write Your Review</h4>
            <h5>About the {name}</h5>
          </div>
          <button onClick={(e) => {
            e.preventDefault();
            showModal()
          }} className="reviews-modal-button">X</button>
        </div>
        <div className="reviews-modal-body">
          <ModalForm id={props.id} close={() => showModal()} ids={props.ids}/>
        </div>

      </div>
    </div>
  )
}

export default Modal;