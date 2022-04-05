import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../api/pokeapi";

export const loadStatsList = createAsyncThunk("stat/loadStatsList", fetchAPI);

const initialState = {
  statsList: {},
  statsListLoading: false,
  statsListFailed: false,
  statsSorted: {},
};

export const statsSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    setStatsSorted: (state, action) => {
      state.statsSorted = {};
      state.statsSorted[action.payload[0]] = action.payload[1];
    },
    removeStatsSorted: (state, action) => {
      delete state.statsSorted[action.payload];
    },
    clearStatsSorted: (state, action) => {
      state.statsSorted = {};
    },
  },
  extraReducers: {
    [loadStatsList.pending]: (state, action) => {
      state.statsListLoading = true;
      state.statsListFailed = false;
    },
    [loadStatsList.rejected]: (state, action) => {
      state.statsListLoading = false;
      state.statsListFailed = true;
    },
    [loadStatsList.fulfilled]: (state, action) => {
      state.statsListLoading = false;
      state.statsListFailed = false;
      action.payload.results.forEach((stat) => {
        state.statsList[stat.name] = {
          name: stat.name,
          isLoading: false,
          failed: false,
        };
      });
    },
  },
});

export const { setStatsSorted, removeStatsSorted, clearStatsSorted } =
  statsSlice.actions;

export const selectStatsList = (state) => state.stat.statsList;
export const selectStatsSorted = (state) => state.stat.statsSorted;
export const selectStatsListLoading = (state) => state.stat.statsListLoading;

export default statsSlice.reducer;
