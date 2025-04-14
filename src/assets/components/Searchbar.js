// src/components/SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search Expenses:</label>
      <input
        type="text"
        id="search"
        placeholder="Enter name or category"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;