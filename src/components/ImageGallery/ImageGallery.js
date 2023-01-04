import React, { useState } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  // static propTypes = {
  //   images: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       webformatURL: PropTypes.string.isRequired,
  //       largeImageURL: PropTypes.string.isRequired,
  //     })
  //   ).isRequired,
  // };

  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
}
