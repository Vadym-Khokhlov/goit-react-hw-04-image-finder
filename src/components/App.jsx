import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import React, { Component } from 'react';
import { fetchImagesWithQuery } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    search: '',
    images: [],
    error: '',
    isLoading: false,
    totalHits: 0,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.page !== this.state || prevState.search !== this.search) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImagesWithQuery(search, page);
        if (images.totalHits === 0) {
          this.setState({ error: 'Nothing was found, try again' });
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          totalHits: images.totalHits,
          error: '',
        }));
      } catch (error) {
        this.setState({
          errror: 'Houston, we have a problem:) try to reload the page',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleFormSubmit = search => {
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error, page, totalHits } = this.state;
    const totalPages = Math.ceil(totalHits / 12);

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {isLoading && <p>Loading...</p>}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />

            {totalPages > 1 && page < totalPages && (
              <button className="Button" onClick={this.loadMore}>
                Load more
              </button>
            )}
          </>
        )}
        {error && <p className="Error">{error}</p>}
        <ToastContainer
          position="top-center"
          closeOnClick={true}
          autoClose={2000}
        />
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
