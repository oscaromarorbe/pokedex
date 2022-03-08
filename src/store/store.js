import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemon from "./pokemonSlice";
import abilities from "./abilitiesSlice";
import stats from "./statsSlice";
import types from "./typesSlice";

export default configureStore({
  reducer: combineReducers({
    pokemon,
    /* abilities,
    stats,
    types, */
  }),
});
