import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../api/pokeapi";

export const loadAbilitiesList = createAsyncThunk(
  "ability/loadAbilitiesList",
  fetchAPI
);

export const loadSingleAbility = createAsyncThunk(
  "ability/loadSingleAbility",
  fetchAPI
);

const initialState = {
  abilitiesList: {},
  abilitiesListLoading: false,
  abilitiesListFailed: false,
};

export const abilitiesSlice = createSlice({
  name: "ability",
  initialState,
  reducers: {},
  extraReducers: {
    [loadAbilitiesList.pending]: (state, action) => {
      state.abilitiesListLoading = true;
      state.abilitiesListFailed = false;
    },
    [loadAbilitiesList.rejected]: (state, action) => {
      state.abilitiesListLoading = false;
      state.abilitiesListFailed = true;
    },
    [loadAbilitiesList.fulfilled]: (state, action) => {
      state.abilitiesListLoading = false;
      state.abilitiesListFailed = false;
      action.payload.results.forEach((ability) => {
        state.abilitiesList[ability.name] = {
          name: ability.name,
          isLoading: false,
          failed: false,
        };
      });
    },
    [loadSingleAbility.pending]: (state, action) => {
      state.abilitiesList[action.meta.arg.id].loading = true;
      state.abilitiesList[action.meta.arg.id].failed = false;
    },
    [loadSingleAbility.rejected]: (state, action) => {
      state.abilitiesList[action.meta.arg.id].loading = false;
      state.abilitiesList[action.meta.arg.id].failed = true;
    },
    [loadSingleAbility.fulfilled]: (state, action) => {
      state.abilitiesList[action.meta.arg.id].loading = false;
      state.abilitiesList[action.meta.arg.id].failed = false;
      action.payload.effect_entries.forEach((entry) => {
        if (entry.language.name === "en") {
          state.abilitiesList[action.meta.arg.id].effect = entry.short_effect;
        }
      });
    },
  },
});

export const selectAbilitiesList = (state) => state.ability.abilitiesList;

export default abilitiesSlice.reducer;
