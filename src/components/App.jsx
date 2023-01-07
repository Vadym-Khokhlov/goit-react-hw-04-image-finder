import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import React, { useState, useEffect } from 'react';
import { fetchImagesWithQuery } from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function findImages(search) {
      if (!search) {
        return;
      }

      setIsLoading(true);
      try {
        const imagesData = await fetchImagesWithQuery(search, page);
        if (imagesData.totalHits === 0) {
          setError('Nothing was found, try again');
          return;
        }

        setImages(prevState => [...prevState, ...imagesData.hits]);
        setTotalHits(imagesData.totalHits);
        setError('');
      } catch (error) {
        setError('Houston, we have a problem:) try to reload the page');
      } finally {
        setIsLoading(false);
      }
    }
    findImages(search);
  }, [page, search]);

  const handleFormSubmit = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const totalPages = Math.ceil(totalHits / 12);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      {isLoading && <p>Loading...</p>}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />

          {totalPages > 1 && page < totalPages && (
            <button className="Button" onClick={loadMore}>
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
};
