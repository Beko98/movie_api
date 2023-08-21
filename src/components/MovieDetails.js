import React, { useEffect, useState } from "react";

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = match.params;

  useEffect(() => {}, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const movieImage = movieDetails.posterUrl ? (
    <img src={movieDetails.posterUrl} alt={movieDetails.title} />
  ) : null;

  return (
    <div className="movie-details">
      <h2>{movieDetails.title}</h2>
      {movieImage}
      <p>{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
