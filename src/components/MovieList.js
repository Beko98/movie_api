// import React from "react";

// const MovieList = ({ movies, onSelect }) => {
//   return (
//     <ul className="list">
//       {movies.map((movie) => (
//         <li key={movie.id} onClick={() => onSelect(movie)}>
//           {movie.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieList;

// import React from "react";

// const MovieList = ({ movies, onSelect }) => {
//   return (
//     <ul className="movie-list">
//       {movies.map((movie) => (
//         <li
//           key={movie.id}
//           className="movie-item"
//           onClick={() => onSelect(movie)}
//         >
//           <div className="movie-poster">
//             <img
//               src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//               alt={movie.title}
//             />
//           </div>
//           <div className="movie-details">
//             <h3>{movie.title}</h3>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Rating: {movie.vote_average}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieList;

import React from "react";

const MovieList = ({ movies, onSelect }) => {
  const filteredMovies = movies.filter((movie) => movie.poster_path);

  return (
    <ul className="movie-list">
      {filteredMovies.map((movie) => (
        <li
          key={movie.id}
          className="movie-item"
          onClick={() => onSelect(movie)}
        >
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
