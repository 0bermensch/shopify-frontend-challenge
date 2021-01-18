import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const MovieCard = ({ info }) => {
  const { addMovieToNominatelist, nominatelist } = useContext(GlobalContext);

  const storedMovie = nominatelist.find((o) => o.imdbID === info.imdbID);

  const nominatelistDisabled = storedMovie ? true : false;
  return (
    <div className="moviecard">
      <div className="moviecard__wrapper">
        {info.Poster ? (
          <img
            className="moviecard__poster"
            src={info.Poster}
            alt={info.Title}
          />
        ) : (
          <div className="moviecard__filterposter"></div>
        )}
      </div>
      <div className="moviecard__info">
        <div className="moviecard__info">
          <h3 className="moviecard__info--title">{info.Title}</h3>
          <h4 className="moviecard__info--releasedate">
            {info.Year ? info.Year : "Cannot Find Release Year"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="moviecard__nominatebtn"
            disabled={nominatelistDisabled}
            onClick={() => addMovieToNominatelist(info)}
          >
            Nominate Movie
          </button>
        </div>
      </div>
    </div>
  );
};
