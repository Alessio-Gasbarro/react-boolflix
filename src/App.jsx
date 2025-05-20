import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { searchAllMedia } from "./services/api";

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const unifiedResults = await searchAllMedia(query);
    setResults(unifiedResults);
  };

  return (
    <div>
      <h1>Trova Film e Serie TV!</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={results} />
    </div>
  );
};

export default App;
