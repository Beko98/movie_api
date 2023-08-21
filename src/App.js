import React, { useState } from "react";
import "./scss/_reset.scss";
import "./scss/_MovieList.scss";
import "./scss/_App.scss";
import "./scss/_SearchForm.scss";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (movies) => {
    setMovies(movies);
    setSelectedMovie(null);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie({
      ...movie,
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    });
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>

      <SearchForm onSearch={handleSearch} />
      {selectedMovie ? (
        <div className="chosenMovieDiv">
          <img src={selectedMovie.posterUrl} alt={selectedMovie.title} />
          <div className="description">
            <h2>{selectedMovie.title}</h2>
            <h3>{selectedMovie.overview}</h3>
            <div className="date-rating">
              <p>Release Date: {selectedMovie.release_date}</p>
              <p>Rating: {selectedMovie.vote_average}</p>
            </div>
          </div>
        </div>
      ) : (
        <MovieList movies={movies} onSelect={handleSelectMovie} />
      )}
    </div>
  );
}

export default App;
