import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card' style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <Link to={`/movie/${encodeURIComponent(movie.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} width="150" />
        <p>{movie.description}</p>
        <strong>Note: {movie.note}</strong>
      </Link>
    </div>
  );
};

export default MovieCard;