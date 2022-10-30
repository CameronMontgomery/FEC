import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

// Gets div in index.html that will be used for our portal
const modalElement = document.getElementById('modal-root');

export function Modal({ children, fade = true, defaultOpened = false}, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)
  // Allows modal to close on and avoid "Scripts may close only the windows that were opened by them."
  const close = useCallback(() => setIsOpen(false), [])
  // Exposes open and close methods to be activated by parent
  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true)
    },
    close
  }), [])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) setIsOpen(false);
  }, [close])

  // Creates an event listener for handleEscape when modal is open
  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={`QA-modal ${fade ? 'QA-modal-fade' : ''}`}>
        <div className="QA-modal-overlay" onClick={close} />
        <span role="button" className="QA-modal-close" onClick={close}>x</span>
        <div className="QA-modal-body">{children}</div>
      </div>
    ) : null,
    modalElement
  )
}


export default forwardRef(Modal);