import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchType } from "../api/pokeapi";

export const loadTypesList = createAsyncThunk("type/loadTypesList", fetchType);

const initialState = {
  typesList: {},
  typesListLoading: false,
  typesListFailed: false,
};

export const typesSlice = createSlice({
  name: "type",
  initialState,
  reducers: {},
  extraReducers: {
    [loadTypesList.pending]: (state, action) => {
      state.typesListLoading = true;
      state.typesListFailed = false;
    },
    [loadTypesList.rejected]: (state, action) => {
      state.typesListLoading = false;
      state.typesListFailed = true;
    },
    [loadTypesList.fulfilled]: (state, action) => {
      state.typesListLoading = false;
      state.typesListFailed = false;
      action.payload.results.forEach((type) => {
        state.typesList[type.name] = {
          name: type.name,
          isLoading: false,
          failed: false,
          srcImage: "/resources/types-symbols/" + type.name + ".svg",
        };
      });
    },
  },
});

export const selectTypesList = (state) => state.type.typesList;

export default typesSlice.reducer;
