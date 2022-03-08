import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemon } from "../api/pokeapi";

export const loadPokemonList = createAsyncThunk(
  "pokemon/loadPokemonList",
  fetchPokemon
);

export const loadSinglePokemon = createAsyncThunk(
  "pokemon/loadSinglePokemon",
  fetchPokemon
);

const initialState = {
  pokemonListLoading: false,
  pokemonListFailed: false,
  pokemonList: {},
  searchTerm: "",
  selectedPokemon: "",
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    clearSearchTerm(state, action) {
      state.searchTerm = "";
    },
    setSelectedPokemon(state, action) {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon(state, action) {
      state.selectedPokemon = "";
    },
  },
  extraReducers: {
    [loadPokemonList.pending]: (state, action) => {
      state.pokemonListLoading = true;
      state.pokemonListFailed = false;
    },
    [loadPokemonList.rejected]: (state, action) => {
      state.pokemonListLoading = false;
      state.pokemonListFailed = true;
    },
    [loadPokemonList.fulfilled]: (state, action) => {
      state.pokemonListLoading = false;
      state.pokemonListFailed = false;
      action.payload.results.forEach((pokemon) => {
        state.pokemonList[pokemon.name] = {
          name: pokemon.name,
          isLoading: true,
          failed: false,
        };
      });
    },
    [loadSinglePokemon.pending]: (state, action) => {
      state.pokemonList[action.meta.arg.id].isLoading = true;
      state.pokemonList[action.meta.arg.id].failed = false;
    },
    [loadSinglePokemon.rejected]: (state, action) => {
      state.pokemonList[action.meta.arg.id].isLoading = false;
      state.pokemonList[action.meta.arg.id].failed = true;
    },
    [loadSinglePokemon.fulfilled]: (state, action) => {
      state.pokemonList[action.meta.arg.id].isLoading = false;
      state.pokemonList[action.meta.arg.id].failed = false;
      const { abilities, height, id, name, sprites, stats, types, weight } =
        action.payload;
      const pokemon = {
        abilities,
        height,
        id,
        name,
        sprites,
        stats,
        types,
        weight,
        isLoading: false,
        failed: false,
      };
      state.pokemonList[action.meta.arg.id] = pokemon;
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  setSelectedPokemon,
  clearSelectedPokemon,
} = pokemonSlice.actions;

export const selectPokemonList = (state) => state.pokemon.pokemonList;
export const selectIsPokemonListLoading = (state) =>
  state.pokemon.pokemonListLoading;
export const selectSearchTerm = (state) => state.pokemon.searchTerm;
export const selectSelectedPokemon = (state) =>
  state.pokemon.pokemonList[state.pokemon.selectedPokemon];

export default pokemonSlice.reducer;
