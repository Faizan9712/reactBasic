import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// const Person = (props) => {
//   return (
//     <>
//       <h2>Name :{props.name}</h2>
//       <h2>Age : {props.age}</h2>
//     </>
//   );
// };

// const App = () => {
//   const name = "John";
//   const isName = true;
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     alert("changed counter to " + counter);
//   }, [counter]);
//   return (
//     <div className="App">
//       <h1>Hello {isName ? name : "No name Found"}</h1>
//       <Person />
//       <Person name="Faizan" age="22" />
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
//         -
//       </button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
//         +
//       </button>
//     </div>
//   );
// };
const API_URL = "http://www.omdbapi.com?apikey=fa28f8d5";
// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
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
