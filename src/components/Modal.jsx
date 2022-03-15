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
                  <li key={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </li>
                );
              })}
            </ul>
            {/* <span>{"Height: " + selectedPokemon.height + " ft"}</span> */}
            {/* <span>{selectedPokemon.height} ft</span> */}
            <h5>Weight</h5>
            <span>{selectedPokemon.weight} lb</span>
          </div>
          <img
            alt={
              selectedPokemon.name.charAt(0).toUpperCase() +
              selectedPokemon.name.slice(1)
            }
            src={selectedPokemon.image}
          />
          <div>
            {selectedPokemon.abilities ? (
              <>
                <h5>Abilities</h5>
                <ul>
                  {selectedPokemon.abilities.map((ability) => {
                    return (
                      <li key={ability}>
                        {ability.charAt(0).toUpperCase() + ability.slice(1)}
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
                      <li key={stat.name}>
                        {stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}
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
