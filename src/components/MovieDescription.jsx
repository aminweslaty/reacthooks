import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) return <p>Film introuvable</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">⬅ Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDescription;