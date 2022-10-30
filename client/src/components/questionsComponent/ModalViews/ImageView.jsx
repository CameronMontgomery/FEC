import React from 'react';
import Modal from '../Modal.jsx';


const ImageView = ({ photo }) => {
  return (
    <img src={photo} className="QA-modal-image" data-testid="modalImage" alt="Pictures provided by poster"/>
  )
}

export default ImageView;