import React, { useState, useEffect, useCallback } from "react";
import { searchMovies } from "../components/Api";
import { BiSearch } from "react-icons/bi";
import "../scss/_SearchForm.scss";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionClicked, setSuggestionClicked] = useState(false);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    onSearch(movies);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setSuggestionClicked(true);
    }
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    setSuggestionClicked(false);
  };

  const fetchMovies = useCallback(async () => {
    try {
      const movies = await searchMovies(query);
      setSuggestions(movies);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      fetchMovies();
    } else {
      setSuggestions([]);
    }
  }, [query, fetchMovies]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    handleSearch();
    setSuggestionClicked(true);
  };

  return (
    <div className="search-container">
      <button className="searchBtn" onClick={handleSearch}>
        <BiSearch />
      </button>
      <input
        className="search"
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {suggestionClicked ? null : (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
