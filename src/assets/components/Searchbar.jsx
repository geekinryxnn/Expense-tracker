import React from 'react';

// Receive searchTerm and setSearchTerm as props
function SearchBar({ searchTerm, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor= "search" id="search-label">Search Expenses:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by name or category"
      />
    </div>
  );
}

export default SearchBar;