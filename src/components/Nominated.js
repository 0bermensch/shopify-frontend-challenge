import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { NominatedCard } from "./NominatedCard";

export const Nominated = () => {
  const { nominatelist } = useContext(GlobalContext);
  return (
    <div className="nominate">
      <div className="nominate__title">Nominated List</div>
      <div className="nominate__container">
        <div className="nominate__header">
          {nominatelist.length === 5 ? (
            <h1
              className="fivemovies"
              style={{
                position: "fixed",
                textAlign: "center",
                marginLeft: "20rem",
                fontWeight: "bold",
              }}
            >
              You Have Nominated Five Movies!!!
            </h1>
          ) : (
            <div></div>
          )}
        </div>
        {nominatelist.length > 0 ? (
          <div className="nominate__movies">
            {nominatelist.map((info) => (
              <NominatedCard info={info} type="nominatelist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">No Movies Nominated</h2>
        )}
      </div>
    </div>
  );
};
