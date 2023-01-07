import React, { useState } from 'react';
import Modal from '../Modal';
import '../styles.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <Modal onClose={() => setShowModal(false)} url={largeImageURL}></Modal>
      )}
    </li>
  );
}
