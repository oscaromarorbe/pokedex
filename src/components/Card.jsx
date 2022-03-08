import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSinglePokemon, setSelectedPokemon } from "../store/pokemonSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(loadSinglePokemon({ id: props.pokemon.name })),
    [dispatch, props.pokemon.name]
  );
  const handleSelectPokemon = () => {
    dispatch(setSelectedPokemon(props.pokemon.name));
  };
  return (
    <div onClick={handleSelectPokemon} className="card">
      <h3>{props.pokemon.name.toUpperCase()}</h3>
      {props.pokemon.sprites ? (
        <img
          alt={props.pokemon.name}
          src={
            props.pokemon.sprites
              ? props.pokemon.sprites.other["official-artwork"].front_default
              : ""
          }
          className="card-img"
        />
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Card;
