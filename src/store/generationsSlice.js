import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../api/pokeapi";

export const loadGenerationsList = createAsyncThunk(
  "generation/loadGenerationsList",
  fetchAPI
);

const initialState = {
  generationsList: [],
  generationsListLoading: false,
  generationsListFailed: false,
};

export const generationsSlice = createSlice({
  name: "generation",
  initialState,
  reducers: {},
  extraReducers: {
    [loadGenerationsList.pending]: (state, action) => {
      state.generationsListLoading = true;
      state.generationsListFailed = false;
    },
    [loadGenerationsList.rejected]: (state, action) => {
      state.generationsListLoading = false;
      state.generationsListFailed = true;
    },
    [loadGenerationsList.fulfilled]: (state, action) => {
      state.generationsListLoading = false;
      state.generationsListFailed = false;
      state.generationsList = action.payload.results.map(
        (generation) => generation.name
      );
    },
  },
});

export const selectGenerationsList = (state) =>
  state.generation.generationsList;
export const selectGenerationsListLoading = (state) =>
  state.generation.generationsListLoading;

export default generationsSlice.reducer;
