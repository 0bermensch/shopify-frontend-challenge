import React from "react";
import { Controller } from "./Controller";

export const NominatedCard = ({ info, type }) => {
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
        <Controller type={type} info={info} />
      </div>
    </div>
  );
};
