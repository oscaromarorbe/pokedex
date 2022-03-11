import React from "react";
import reactDom from "react-dom";
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
  if (!props.active) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal">
        <div className="modal-header">
          <h3>{selectedPokemon.name.toUpperCase()}</h3>
          <div id="close" onClick={handleClose}></div>
        </div>
        <div className="modal-grid">
          <div>
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
          <img
            alt={
              selectedPokemon.name.charAt(0).toUpperCase() +
              selectedPokemon.name.slice(1)
            }
            src={
              selectedPokemon.sprites.other["official-artwork"].front_default
            }
          />
          <div>
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
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
