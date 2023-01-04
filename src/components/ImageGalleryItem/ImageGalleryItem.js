import React, { useState } from 'react';
import Modal from '../Modal';
import '../styles.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </li>
  );
}
