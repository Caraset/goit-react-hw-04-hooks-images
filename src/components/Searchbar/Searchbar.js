import { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();

    const trimedQuery = query.trim();

    if (!trimedQuery) {
      alert('Please enter a search term to begin your search.');
      return;
    }

    onSubmit(trimedQuery);
    setQuery('');
  }

  function onInput(e) {
    setQuery(e.currentTarget.value);
  }

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitHandler}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          onChange={onInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
