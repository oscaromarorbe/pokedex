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
  filteredPokemonList: {},
  searchTerm: "",
  selectedPokemon: "",
  typesFiltered: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state.searchTerm = "";
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon: (state, action) => {
      state.selectedPokemon = "";
    },
    setTypesFiltered: (state, action) => {
      state.typesFiltered.push(action.payload);
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
      Object.values(state.pokemonList).forEach((pokemon) => {
        if (
          !pokemon.types.some((type) => state.typesFiltered.indexOf(type) > -1)
        ) {
          delete state.filteredPokemonList[pokemon.name];
        }
      });
    },
    removeTypesFiltered: (state, action) => {
      state.typesFiltered = state.typesFiltered.filter(
        (type) => type !== action.payload
      );
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
      if (state.typesFiltered.length > 0) {
        Object.values(state.pokemonList).forEach((pokemon) => {
          if (
            !pokemon.types.some(
              (type) => state.typesFiltered.indexOf(type) > -1
            )
          ) {
            delete state.filteredPokemonList[pokemon.name];
          }
        });
      }
    },
    clearTypesFiltered: (state, action) => {
      state.typesFiltered = [];
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
    },
    filterPokemonListByType: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredPokemonList = state.pokemonList;
      } else {
        /* const filteredPokemonList = {};
        const pokemonList = Object.values(state.pokemonList).filter((pokemon) =>
          action.payload.some((type) => pokemon.types.indexOf(type) > -1)
        ); */
        Object.values(state.pokemonList).forEach((pokemon) => {
          if (
            !pokemon.types.some((type) => action.payload.indexOf(type) > -1)
          ) {
            delete state.filteredPokemonList[pokemon.name];
          }
        });
        /* pokemonList.forEach((pokemon) => {
          filteredPokemonList[pokemon.name] = pokemon;
        });
        state.filteredPokemonList = filteredPokemonList; */
      }
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
        const pokemonObj = {
          name: pokemon.name,
          isLoading: true,
          failed: false,
        };
        state.pokemonList[pokemon.name] = pokemonObj;
        state.filteredPokemonList[pokemon.name] = pokemonObj;
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
      const abilitiesArray = abilities.map((ability) => ability.ability.name);
      const statsArray = stats.map((stat) => ({
        name: stat.stat.name,
        base_stat: stat.base_stat,
      }));
      const typesArray = types.map((type) => type.type.name);
      const image = sprites.other["official-artwork"].front_default;
      const pokemon = {
        abilities: abilitiesArray,
        height,
        id,
        name,
        image,
        stats: statsArray,
        types: typesArray,
        weight,
        isLoading: false,
        failed: false,
      };
      state.pokemonList[name] = pokemon;
      state.filteredPokemonList[name] = pokemon;
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  setSelectedPokemon,
  clearSelectedPokemon,
  setTypesFiltered,
  removeTypesFiltered,
  clearTypesFiltered,
  filterPokemonListByType,
} = pokemonSlice.actions;

export const selectPokemonList = (state) => state.pokemon.pokemonList;
export const selectFilteredPokemonList = (state) =>
  state.pokemon.filteredPokemonList;
export const selectIsPokemonListLoading = (state) =>
  state.pokemon.pokemonListLoading;
export const selectSearchTerm = (state) => state.pokemon.searchTerm;
export const selectSelectedPokemon = (state) =>
  state.pokemon.pokemonList[state.pokemon.selectedPokemon];
export const selectTypesFiltered = (state) => state.pokemon.typesFiltered;

export default pokemonSlice.reducer;
