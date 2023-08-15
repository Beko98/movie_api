import React, { useState } from "react";
import { searchMovies } from "../components/Api";
import { BiSearch } from "react-icons/bi";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    onSearch(movies);
  };

  return (
    <div>
      <button className="searchBtn" onClick={handleSearch}>
        <BiSearch />
      </button>
      <input
        className="search"
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
