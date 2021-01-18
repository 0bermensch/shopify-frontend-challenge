import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  nominatelist: localStorage.getItem("nominatelist")
    ? JSON.parse(localStorage.getItem("nominatelist"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("nominatelist", JSON.stringify(state.nominatelist), [
      state,
    ]);
  });

  const addMovieToNominatelist = (info) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATELIST", payload: info });
  };

  const removeMovieFromNominatelist = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_NOMINATELIST", payload: imdbID });
  };

  return (
    <GlobalContext.Provider
      value={{
        nominatelist: state.nominatelist,
        addMovieToNominatelist,
        removeMovieFromNominatelist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
