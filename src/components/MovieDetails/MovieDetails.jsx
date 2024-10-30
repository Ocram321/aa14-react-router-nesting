import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  const movieChoice = movies.find((movie) => movie.id === parseInt(movieId, 10));

  return (
    <div>
      <h1>{movieChoice?.title || "Movie not found"}</h1>
      <p>{movieChoice?.description || "No description available."}</p>
    </div>
  );
}

export default MovieDetails;
