import { useEffect, useState } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./components/MovieCard";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const api = await fetch(`http://omdbapi.com/?apikey=9eb261b1&s=${title}`);
    const data = await api.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("marvel");
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            console.log(movie);
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
