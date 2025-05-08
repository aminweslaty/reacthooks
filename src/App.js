import React, { useState } from 'react';
import MovieList from './components/movielist';
import Filter from './components/filter';
import './App.css';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief steals corporate secrets through dream-sharing.',
      posterURL: 'https://media0078.elcinema.com/uploads/_315x420_2028a02da250c809cc4493409e19f7f80e2f37f9045ef28cf033448f56968505.jpg',
      note: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers reality is a simulation.',
      posterURL: 'https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg' ,
      note: 8.7,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    note: '',
  });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === '' || movie.note >= parseFloat(ratingFilter))
  );

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.note
    ) {
      setMovies([...movies, { ...newMovie, note: parseFloat(newMovie.note) }]);
      setNewMovie({ title: '', description: '', posterURL: '', note: '' });
    }
  };

  return (
    <div>
      <h1>🎬 Application Cinéma</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <div style={{ margin: 20 }}>
        <h2>Ajouter un film</h2>
        <input
          type="text"
          placeholder="Titre"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL du poster"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <label>Note : {newMovie.note}</label>
<input
  type="range"
  min="0"
  max="10"
  step="0.1"
  value={newMovie.note}
  onChange={(e) => setNewMovie({ ...newMovie, note: e.target.value })}
/>

        <button onClick={handleAddMovie}>Ajouter</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
