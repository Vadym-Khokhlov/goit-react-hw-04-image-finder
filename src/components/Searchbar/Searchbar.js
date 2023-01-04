import React, { useState } from 'react';
import '../styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    const query = e.currentTarget.value.toLowerCase();
    setSearch(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchInput = search.trim().toLowerCase();
    if (searchInput === '') {
      toast.info('enter your query');
      return;
    }
    onSubmit(searchInput);
    setSearch('');
  };

  return (
    <header className="Searchbar">
      <h1 className="Searchbar-title">Image Finder</h1>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          name="search"
          value={search}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearch}
        />
        <button type="submit" className="SearchForm-button">
          Try<span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
