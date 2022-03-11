import React, { useEffect } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPokemonList, selectPokemonList } from "../store/pokemonSlice";
import Card from "./Card";

const List = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList) ?? false;
  const fetchPokemon = useCallback(() => {
    dispatch(
      loadPokemonList({
        id: false,
        params: {
          limit: Object.values(pokemonList).length === 880 ? 18 : 20,
          offset: Object.values(pokemonList).length,
        },
      })
    );
  }, [dispatch, pokemonList]);
  useEffect(() => {
    if (Object.values(pokemonList).length === 0) {
      fetchPokemon();
    }
  }, [dispatch, pokemonList, fetchPokemon]);
  return (
    <div className="list">
      <ul className="card-holder">
        {Object.values(pokemonList).length > 0 ? (
          Object.values(pokemonList).map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} />;
          })
        ) : (
          <div className="loader"></div>
        )}
      </ul>
      <button
        onClick={fetchPokemon}
        disabled={Object.values(pokemonList).length > 897}
        className="load-more"
      >
        Load more
      </button>
    </div>
  );
};

export default List;
