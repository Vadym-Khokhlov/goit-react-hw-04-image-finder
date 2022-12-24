import React, { Component } from 'react';
import '../styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSearch = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.search.trim() === '') {
      toast.info('enter your query');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <h1 className="Searchbar-title">Image Finder</h1>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            name="search"
            value={this.state.search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
          <button type="submit" className="SearchForm-button">
            Try<span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
