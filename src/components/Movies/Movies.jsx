import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MovieNavBar from '../../components/Movies/MovieNavBar';

function Movies({ movies }) {
  console.log(movies)
  return (
    <div>
      <h1>Movies Component</h1>
      <MovieNavBar movies={movies} />  
      <Outlet />  
    </div>
  );
}


export default Movies;
