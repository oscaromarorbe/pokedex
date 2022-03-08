import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedPokemon,
  selectSelectedPokemon,
} from "../store/pokemonSlice";

const Modal = (props) => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const handleClose = () => {
    dispatch(clearSelectedPokemon());
  };
  if (!selectedPokemon) return "";
  return (
    <div>
      <div id="close" onClick={handleClose}></div>
      <div style={{ display: "inline-block" }}>
        <h3>{selectedPokemon.name.toUpperCase()}</h3>
        <img
          alt={
            selectedPokemon.name.charAt(0).toUpperCase() +
            selectedPokemon.name.slice(1)
          }
          src={selectedPokemon.sprites.other["official-artwork"].front_default}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <h5>Types</h5>
        <ul>
          {selectedPokemon.types.map((type) => {
            return (
              <li key={type.slot}>
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </li>
            );
          })}
        </ul>
        <h5>Height</h5>
        <span>{selectedPokemon.height} ft</span>
        <h5>Weight</h5>
        <span>{selectedPokemon.weight} lb</span>
      </div>
      <div style={{ display: "inline-block" }}>
        {selectedPokemon.abilities ? (
          <>
            <h5>Abilities</h5>
            <ul>
              {selectedPokemon.abilities.map((ability) => {
                return (
                  <li key={ability.slot}>
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
        {selectedPokemon.stats ? (
          <>
            <h5>Stats</h5>
            <ul>
              {selectedPokemon.stats.map((stat) => {
                return (
                  <li key={stat.stat.name}>
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                    : {stat.base_stat}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
