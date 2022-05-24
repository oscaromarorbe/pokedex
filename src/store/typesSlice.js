import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../api/pokeapi";

export const loadTypesList = createAsyncThunk("type/loadTypesList", fetchAPI);

export const loadSingleType = createAsyncThunk("type/loadSingleType", fetchAPI);

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
          loading: false,
          failed: false,
          srcImage: "/resources/types-symbols/" + type.name + ".svg",
        };
      });
    },
    [loadSingleType.pending]: (state, action) => {
      state.typesList[action.meta.arg.id].loading = true;
      state.typesList[action.meta.arg.id].failed = false;
    },
    [loadSingleType.rejected]: (state, action) => {
      if (state.typesList.hasOwnProperty(action.meta.arg.id)) {
        state.typesList[action.meta.arg.id].loading = false;
        state.typesList[action.meta.arg.id].failed = true;
      }
    },
    [loadSingleType.fulfilled]: (state, action) => {
      state.typesList[action.meta.arg.id].loading = false;
      state.typesList[action.meta.arg.id].failed = false;
      state.typesList[action.meta.arg.id].weaknesses =
        action.payload.damage_relations.double_damage_from.map(
          (relation) => relation.name
        );
      state.typesList[action.meta.arg.id].resistances =
        action.payload.damage_relations.half_damage_from.map(
          (relation) => relation.name
        );
      state.typesList[action.meta.arg.id].immunities =
        action.payload.damage_relations.no_damage_from.map(
          (immune) => immune.name
        );
    },
  },
});

export const selectTypesList = (state) => state.type.typesList;
export const selectTypesListLoading = (state) => state.type.typesListLoading;

export default typesSlice.reducer;
