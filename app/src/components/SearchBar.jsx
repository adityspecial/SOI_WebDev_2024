// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div id="search" className="search-bar p-30">
      <input
        type="text"
        placeholder="Search for books, authors, or topics"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
