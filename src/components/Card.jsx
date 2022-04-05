import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSingleGeneration,
  loadSinglePokemon,
  selectPokemonList,
  /* loadSingleType, */
  setSelectedPokemon,
} from "../store/pokemonSlice";
import { loadSingleType } from "../store/typesSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList);
  useEffect(() => {
    dispatch(loadSinglePokemon({ id: props.pokemonName, endpoint: "pokemon" }));
    const generations = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];
    generations.forEach((generation) => {
      dispatch(
        loadSingleGeneration({
          id: `generation-${generation}`,
          endpoint: "generation",
          pokemon: props.pokemonName,
        })
      );
    });
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
  }, [dispatch, props.pokemonName]);
  const handleSelectPokemon = () => {
    if (!pokemonList[props.pokemonName].loading)
      dispatch(setSelectedPokemon(props.pokemonName));
  };
  return (
    <div
      onClick={handleSelectPokemon}
      className={
        "card" +
        (!pokemonList[props.pokemonName].display ? " display-none" : "")
      }
    >
      <h3>{props.pokemonName.toUpperCase()}</h3>
      {(pokemonList[props.pokemonName].image &&
        !pokemonList[props.pokemonName].loading && (
          <img
            alt={props.pokemonName}
            src={pokemonList[props.pokemonName].image}
            className="card-img"
          />
        )) ?? <div className="loader"></div>}
    </div>
  );
};

export default Card;
