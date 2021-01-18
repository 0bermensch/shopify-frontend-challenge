import React, { useState } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = "6c9fb82e";

  const https = "https";

  const movieTitle = (e) => {
    setQuery(e.target.value);
  };

  const movie = () => {
    axios
      .get(
        `${https}://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${query}/`
      )
      .then((res) => {
        setResults(res.data.Search.map((info) => info));
      });
  };

  return (
    <div className="search">
      <div className="search__title">Search Movie</div>
      <div className="search__container">
        <div className="add-content">
          <div className="search__wrapper">
            <input
              className="search__input"
              type="text"
              placeholder="Search for movies"
              onChange={movieTitle}
              value={query}
            />
            <button className="search__button" onClick={movie}>
              Search
            </button>
          </div>

          {results.length > 0 && (
            <ul className="search__result">
              {results.map((info) => (
                <li className="search__result--item" key={info.imdbID}>
                  <MovieCard info={info} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
