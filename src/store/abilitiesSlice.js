import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAbility } from "../api/pokeapi";

export const loadAbilitiesList = createAsyncThunk(
  "ability/loadAbilitiesList",
  fetchAbility
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
  },
});

export const selectAbilitiesList = (state) => state.ability.abilitiesList;

export default abilitiesSlice.reducer;
