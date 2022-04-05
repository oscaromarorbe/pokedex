import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAPI } from "../api/pokeapi";

export const loadPokemonList = createAsyncThunk(
  "pokemon/loadPokemonList",
  fetchAPI
);

export const loadSinglePokemon = createAsyncThunk(
  "pokemon/loadSinglePokemon",
  fetchAPI
);

export const loadSingleGeneration = createAsyncThunk(
  "pokemon/loadSingleGeneration",
  fetchAPI
);

export const loadSingleType = createAsyncThunk(
  "pokemon/loadSingleType",
  fetchAPI
);

const initialState = {
  pokemonListLoading: false,
  pokemonListFailed: false,
  pokemonList: {},
  filteredPokemonList: {},
  searchTerm: "",
  selectedPokemon: "",
  typesFiltered: [],
  sortedBy: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
      Object.values(state.pokemonList).forEach((pokemon) => {
        if (
          !pokemon.types.some(
            (type) => state.typesFiltered.indexOf(type) > -1
          ) &&
          state.typesFiltered.length > 0
        ) {
          state.filteredPokemonList[pokemon.name].display = false;
        } else {
          state.filteredPokemonList[pokemon.name].display = true;
        }
      });
      Object.values(state.filteredPokemonList).forEach((pokemon) => {
        if (
          !pokemon.name.includes(action.payload) &&
          action.payload &&
          state.filteredPokemonList[pokemon.name].display !== false
        ) {
          state.filteredPokemonList[pokemon.name].display = false;
        }
      });
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
        if (!pokemon.name.includes(state.searchTerm) && state.searchTerm) {
          state.filteredPokemonList[pokemon.name].display = false;
        } else {
          state.filteredPokemonList[pokemon.name].display = true;
        }
      });
      Object.values(state.filteredPokemonList).forEach((pokemon) => {
        if (
          !pokemon.types.some(
            (type) => state.typesFiltered.indexOf(type) > -1
          ) &&
          state.filteredPokemonList[pokemon.name].display !== false
        ) {
          state.filteredPokemonList[pokemon.name].display = false;
        }
      });
    },
    removeTypesFiltered: (state, action) => {
      state.typesFiltered = state.typesFiltered.filter(
        (type) => type !== action.payload
      );
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
      Object.values(state.pokemonList).forEach((pokemon) => {
        if (!pokemon.name.includes(state.searchTerm) && state.searchTerm) {
          state.filteredPokemonList[pokemon.name].display = false;
        } else {
          state.filteredPokemonList[pokemon.name].display = true;
        }
      });
      Object.values(state.filteredPokemonList).forEach((pokemon) => {
        if (
          !pokemon.types.some(
            (type) => state.typesFiltered.indexOf(type) > -1
          ) &&
          state.typesFiltered.length > 0 &&
          state.filteredPokemonList[pokemon.name].display !== false
        ) {
          state.filteredPokemonList[pokemon.name].display = false;
        }
      });
    },
    clearTypesFiltered: (state, action) => {
      state.typesFiltered = [];
      state.filteredPokemonList = Object.assign({}, state.pokemonList);
      Object.values(state.filteredPokemonList).forEach((pokemon) => {
        state.filteredPokemonList[pokemon.name].display = true;
      });
    },
    setSortedBy: (state, action) => {
      state.sortedBy[action.payload.stat] = action.payload.order;
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
          loading: true,
          failed: false,
        };
        state.pokemonList[pokemon.name] = pokemonObj;
        state.filteredPokemonList[pokemon.name] = pokemonObj;
      });
    },
    [loadSinglePokemon.pending]: (state, action) => {
      state.pokemonList[action.meta.arg.id].loading = true;
      state.pokemonList[action.meta.arg.id].failed = false;
    },
    [loadSinglePokemon.rejected]: (state, action) => {
      state.pokemonList[action.meta.arg.id].loading = false;
      state.pokemonList[action.meta.arg.id].failed = true;
    },
    [loadSinglePokemon.fulfilled]: (state, action) => {
      state.pokemonList[action.meta.arg.id].loading = false;
      state.pokemonList[action.meta.arg.id].failed = false;
      const { abilities, height, id, name, sprites, stats, types, weight } =
        action.payload;
      const abilitiesArray = abilities.map((ability) => ability.ability.name);
      const statsObject = {};
      stats.forEach((stat) => {
        statsObject[stat.stat.name] = stat.base_stat;
      });
      const typesArray = types.map((type) => type.type.name);
      const image = sprites.other["official-artwork"].front_default;
      const pokemon = {
        abilities: abilitiesArray,
        height,
        id,
        name,
        image,
        stats: statsObject,
        types: typesArray,
        weaknesses: [],
        resistances: [],
        immunities: [],
        weight,
        loading: false,
        failed: false,
        display: true,
      };
      state.pokemonList[name] = pokemon;
      state.filteredPokemonList[name] = pokemon;
    },
    [loadSingleGeneration.pending]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = true;
      state.pokemonList[action.meta.arg.pokemon].failed = false;
    },
    [loadSingleGeneration.rejected]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = false;
      state.pokemonList[action.meta.arg.pokemon].failed = true;
    },
    [loadSingleGeneration.fulfilled]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = false;
      state.pokemonList[action.meta.arg.pokemon].failed = false;
      action.payload.pokemon_species.forEach((species) => {
        if (
          Object.values(state.pokemonList).some(
            (pokemon) => species.name === pokemon.name
          )
        )
          state.pokemonList[species.name].generation = action.payload.name;
      });
    },
    [loadSingleType.pending]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = true;
      state.pokemonList[action.meta.arg.pokemon].failed = false;
    },
    [loadSingleType.rejected]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = false;
      state.pokemonList[action.meta.arg.pokemon].failed = true;
    },
    [loadSingleType.fulfilled]: (state, action) => {
      state.pokemonList[action.meta.arg.pokemon].loading = false;
      state.pokemonList[action.meta.arg.pokemon].failed = false;
      state.pokemonList[action.meta.arg.pokemon].weaknesses.push(
        action.payload.damage_relations.double_damage_from.map(
          (relation) => relation.name
        )
      );
      state.pokemonList[action.meta.arg.pokemon].resistances.push(
        action.payload.damage_relations.half_damage_from.map(
          (relation) => relation.name
        )
      );
      state.pokemonList[action.meta.arg.pokemon].immunities.push(
        action.payload.damage_relations.no_damage_from.map(
          (relation) => relation.name
        )
      );
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
export const selectPokemonListLoading = (state) =>
  state.pokemon.pokemonListLoading;
export const selectSearchTerm = (state) => state.pokemon.searchTerm;
export const selectSelectedPokemon = (state) =>
  state.pokemon.pokemonList[state.pokemon.selectedPokemon];
export const selectSelectedPokemonName = (state) =>
  state.pokemon.selectedPokemon;
export const selectTypesFiltered = (state) => state.pokemon.typesFiltered;

export default pokemonSlice.reducer;
