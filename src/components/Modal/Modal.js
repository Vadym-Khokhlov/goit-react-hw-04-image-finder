import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, url }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('escape!');
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
