import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import React, { Component } from 'react';
import { fetchImagesWithQuery } from 'services/api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    error: false,
    isLoading: false,
    totalHits: null,
    currentPage: 1,
  };

  handleFormSubmit = async search => {
    try {
      this.setState({ isLoading: true });
      this.setState({ error: null });
      const images = await fetchImagesWithQuery(search);
      if (images.length === 0) {
        this.setState({ error: 'Nothing was found, try again' });
      }
      this.setState({ images });
    } catch (error) {
      this.setState({ error: 'Houston, we have a problem' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>{this.state.error}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && (
          <>
            <h1> {this.state.currentPage}</h1>
            <ImageGallery images={images} />
          </>
        )}
      </>
    );
  }
}

// <Searchbar>,
// <ImageGallery>,
//<ImageGalleryItem>,
// <Loader>,
//<Button>
//<Modal>.

// key  30575180-f51bf292afceb69c3d087b7fc

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

// App.jsx:82 Uncaught RangeError: Maximum call stack size exceeded
//     at Module.default (App.jsx:82:1)
