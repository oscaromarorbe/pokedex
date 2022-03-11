import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStat } from "../api/pokeapi";

export const loadStatsList = createAsyncThunk("stat/loadStatsList", fetchStat);

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
      state.statsSorted[action.payload[0]] = action.payload[1];
    },
    removeStatsSorted: (state, action) => {
      state.statsSorted[action.payload[0]] = action.payload[1];
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

export default statsSlice.reducer;
