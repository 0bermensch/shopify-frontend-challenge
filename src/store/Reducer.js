// export default (state, action) => {
//   switch (action.type) {
//     case "ADD_MOVIE_TO_NOMINATELIST":
//       return {
//         ...state,
//         nominatelist: [action.payload, ...state.nominatelist],
//       };
//     case "REMOVE_MOVIE_FROM_NOMINATELIST":
//       return {
//         ...state,
//         nominatelist: state.nominatelist.filter(
//           (info) => info.imdbID !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

import React from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_NOMINATELIST":
      return {
        ...state,
        nominatelist: [action.payload, ...state.nominatelist],
      };
    case "REMOVE_MOVIE_FROM_NOMINATELIST":
      return {
        ...state,
        nominatelist: state.nominatelist.filter(
          (info) => info.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
