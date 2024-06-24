import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search doctors by name, specialization, or symptoms"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
