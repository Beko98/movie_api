// import React, { useEffect, useState } from "react";

// const MovieDetails = ({ match }) => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const { id } = match.params;

//   useEffect(() => {
//     // Fetch movie details using the 'id' parameter
//     // Set the fetched details to the 'movieDetails' state
//   }, [id]);

//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-details">
//       <h2>{movieDetails.title}</h2>
//       <img src={movieDetails.posterUrl} alt={movieDetails.title} />
//       <p>{movieDetails.overview}</p>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    // Fetch movie details using the 'id' parameter
    // Set the fetched details to the 'movieDetails' state
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // Check if 'posterUrl' is available before rendering the image
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
