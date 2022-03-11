import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemon from "./pokemonSlice";
import ability from "./abilitiesSlice";
import stat from "./statsSlice";
import type from "./typesSlice";

export default configureStore({
  reducer: combineReducers({
    pokemon,
    ability,
    stat,
    type,
  }),
});
