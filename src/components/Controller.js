import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const Controller = ({ info, type }) => {
  const { removeMovieFromNominatelist } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "nominatelist" && (
        <>
          <button
            className="moviecard__removenominate"
            onClick={() => removeMovieFromNominatelist(info.imdbID)}
          >
            Remove Nominated Movie
          </button>
        </>
      )}
    </div>
  );
};
