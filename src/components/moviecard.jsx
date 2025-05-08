import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card' style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} width="150" />
      <p>{movie.description}</p>
      <strong>Note: {movie.note}</strong>
    </div>
  );
};

export default MovieCard;
