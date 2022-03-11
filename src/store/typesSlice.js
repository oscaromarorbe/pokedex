import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchType } from "../api/pokeapi";

export const loadTypesList = createAsyncThunk("type/loadTypesList", fetchType);

const initialState = {
  typesList: {},
  typesListLoading: false,
  typesListFailed: false,
  typesFiltered: [],
};

export const typesSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypesFiltered: (state, action) => {
      state.typesFiltered.push(action.payload);
    },
    removeTypesFiltered: (state, action) => {
      if (!state.typesFiltered.includes(action.payload))
        state.typesFiltered.filter((type) => type !== action.payload);
    },
    clearTypesFiltered: (state, action) => {
      state.typesFiltered = [];
    },
  },
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
          srcImage: "/resources/types-symbols/" + type.name + ".png",
        };
      });
    },
  },
});

export const { setTypesFiltered, removeTypesFiltered, clearTypesFiltered } =
  typesSlice.actions;

export const selectTypesList = (state) => state.type.typesList;

export default typesSlice.reducer;
