import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { fetchMovies } from "./services/api";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Cerca Film</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
