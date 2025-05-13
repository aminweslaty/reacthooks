import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/movielist';
import Filter from './components/filter';
import MovieDescription from './components/MovieDescription';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief steals corporate secrets through dream-sharing.',
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
      posterURL: 'https://media0078.elcinema.com/uploads/_315x420_2028a02da250c809cc4493409e19f7f80e2f37f9045ef28cf033448f56968505.jpg',
      note: 8.8,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers reality is a simulation.',
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
      posterURL: 'https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg',
      note: 8.7,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    trailer: '',
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
      newMovie.trailer &&
      newMovie.note
    ) {
      setMovies([...movies, { ...newMovie, note: parseFloat(newMovie.note) }]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        trailer: '',
        note: '',
      });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, title: e.target.value })
                  }
                /><br/>
                <input
                  type="text"
                  placeholder="Description"
                  value={newMovie.description}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, description: e.target.value })
                  }
                /><br/>
                <input
                  type="text"
                  placeholder="URL du poster"
                  value={newMovie.posterURL}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, posterURL: e.target.value })
                  }
                /><br/>
                <input
                  type="text"
                  placeholder="Trailer YouTube URL"
                  value={newMovie.trailer}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, trailer: e.target.value })
                  }
                /><br/>
                <label>Note : {newMovie.note}</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={newMovie.note}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, note: e.target.value })
                  }
                /><br/>
                <button onClick={handleAddMovie}>Ajouter</button>
              </div>

              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route
          path="/movie/:title"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
