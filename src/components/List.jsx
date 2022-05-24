import React, { useEffect } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPokemonList,
  selectFilteredPokemonList,
  selectPokemonListLoading,
  selectPokemonList,
  loadSingleGeneration,
} from "../store/pokemonSlice";
import { selectStatsSorted } from "../store/statsSlice";
import { loadSingleType } from "../store/typesSlice";
import Card from "./Card";

const List = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList) ?? false;
  const filteredPokemonList = useSelector(selectFilteredPokemonList) ?? false;
  const statsSorted = useSelector(selectStatsSorted);
  const pokemonListLoading = useSelector(selectPokemonListLoading) ?? true;
  const fetchPokemon = useCallback(() => {
    dispatch(
      loadPokemonList({
        id: false,
        endpoint: "pokemon",
        params: {
          limit: Object.values(pokemonList).length === 880 ? 18 : 30,
          offset: Object.values(pokemonList).length,
        },
      })
    );
  }, [dispatch, pokemonList]);
  useEffect(
    () => {
      if (Object.values(pokemonList).length === 0) {
        fetchPokemon();
      }
    },
    [
      /* dispatch, pokemonList, fetchPokemon */
    ]
  );
  useEffect(() => {
    const generations = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];
    generations.forEach((generation) => {
      dispatch(
        loadSingleGeneration({
          id: `generation-${generation}`,
          endpoint: "generation",
        })
      );
    });
  }, []);
  useEffect(() => {
    const types = [
      "bug",
      "dark",
      "dragon",
      "electric",
      "fairy",
      "fighting",
      "fire",
      "flying",
      "ghost",
      "grass",
      "ground",
      "ice",
      "normal",
      "poison",
      "psychic",
      "rock",
      "steel",
      "water",
    ];
    types.forEach((type) => {
      dispatch(loadSingleType({ id: type, endpoint: "type" }));
    });
  }, []);
  return (
    <div className="list">
      <div className="card-holder">
        {(!pokemonListLoading &&
          Object.values(filteredPokemonList)
            .sort(
              Object.values(statsSorted).length > 0
                ? (a, b) =>
                    Object.values(statsSorted)[0] === "ASC"
                      ? a.stats[Object.keys(statsSorted)[0]] -
                        b.stats[Object.keys(statsSorted)[0]]
                      : b.stats[Object.keys(statsSorted)[0]] -
                        a.stats[Object.keys(statsSorted)[0]]
                : undefined
            )
            .map((pokemon) => {
              return <Card key={pokemon.name} pokemonName={pokemon.name} />;
            })) /*  ?? <div className="loader"></div> */ ?? (
          <div className="loader"></div>
        )}
      </div>
      <button
        onClick={fetchPokemon}
        disabled={Object.values(pokemonList).length > 897}
        className="load-more"
      >
        Load more
      </button>
      {/* <div className="bug-symbol">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default List;
