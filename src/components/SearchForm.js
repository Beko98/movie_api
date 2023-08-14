import React, { useState } from "react";
import { searchMovies } from "../components/Api";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    onSearch(movies);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
