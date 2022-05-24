import React from "react";
import { useEffect } from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedPokemon,
  selectSelectedPokemon,
  selectSelectedPokemonName,
} from "../store/pokemonSlice";
import { /* loadSingleType, */ selectTypesList } from "../store/typesSlice";
import { loadSingleType } from "../store/pokemonSlice";
import {
  loadSingleAbility,
  selectAbilitiesList,
} from "../store/abilitiesSlice";
import Abilities from "./Abilities";
/* import WeakResist from "./WeakResist"; */

const Modal = (props) => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const selectedPokemonName = useSelector(selectSelectedPokemonName);
  const typesList = useSelector(selectTypesList);
  const abilitiesList = useSelector(selectAbilitiesList);
  useEffect(
    () => {
      if (
        selectedPokemon?.types?.some((type) => type?.weaknesses?.length === 0)
      ) {
        selectedPokemon.types.forEach((type) =>
          dispatch(
            loadSingleType({
              id: type,
              endpoint: "type",
              pokemon: selectedPokemonName,
            })
          )
        );
      }
      if (selectedPokemonName && selectedPokemon?.abilities?.length === 0) {
        selectedPokemon.abilities.forEach((ability) => {
          dispatch(
            loadSingleAbility({
              id: ability,
              endpoint: "ability",
            })
          );
        });
      }
    },
    [
      /* dispatch,
    selectedPokemonName,
    selectedPokemon?.types,
    selectedPokemon?.abilities, */
    ]
  );
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
          <Abilities />
          {/* <div>
            <h5>Abilities</h5>
            {selectedPokemon?.abilities?.map((ability) => {
              return (
                <div key={ability}>
                  <span
                    className="ability"
                    ability-effect={
                      abilitiesList[ability]?.effect ?? "Ability description"
                    }
                  >
                    {ability
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </span>
                </div>
              );
            }) ?? <div className="loader"></div>}
          </div> */}
          <div>
            <h5>Types</h5>
            <div className="types-holder">
              {selectedPokemon?.types?.map((typeName) => {
                return (
                  <div className="types-list" key={typeName}>
                    <img
                      alt={typeName + " type"}
                      src={typesList[typeName].srcImage}
                      className={"type-" + typeName}
                      type="image/svg+xml"
                    />
                    <span>
                      {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                    </span>
                  </div>
                );
              }) ?? <div className="loader"></div>}
            </div>
          </div>
          <img
            alt={
              selectedPokemon.name.charAt(0).toUpperCase() +
              selectedPokemon.name.slice(1)
            }
            src={selectedPokemon.image}
            id="pokemon-image"
          />
          <div>
            <h5 className="pokemon-details">
              Height
              <br />
              {selectedPokemon.height * 10} cm
            </h5>
            <h5 className="pokemon-details">
              Weight
              <br />
              {selectedPokemon.weight / 10} kg
            </h5>
            <h5 className="pokemon-details">
              Generation
              <br />
              {selectedPokemon?.generation?.slice(11).toUpperCase() ?? (
                <div className="loader"></div>
              )}
            </h5>
          </div>
          <div>
            <>
              <h5>Stats</h5>
              {Object.entries(selectedPokemon?.stats).map(
                ([statName, statValue]) => {
                  return (
                    <div className="stat-holder" key={statName}>
                      <span className={"stat-" + statName}>
                        {statName.toUpperCase().split("-").join(" ") +
                          ": " +
                          statValue}
                      </span>
                    </div>
                  );
                }
              ) ?? <div className="loader"></div>}
            </>
          </div>
        </div>
        <div className="modal-foot">
          <div>
            <h5>Weaknesses</h5>
            <div className="weak-resist">
              {typesList[selectedPokemon?.types[0]]?.weaknesses
                ?.concat(typesList[selectedPokemon?.types[1] ?? -1]?.weaknesses)
                ?.filter(
                  (weakness) =>
                    !selectedPokemon.types
                      .concat(
                        typesList[selectedPokemon.types[0]].resistances,
                        typesList[selectedPokemon.types[1]]?.resistances,
                        typesList[selectedPokemon.types[0]].immunities,
                        typesList[selectedPokemon.types[1]]?.immunities
                      )
                      .includes(weakness)
                )
                ?.filter(
                  (weakness, index, selfArray) =>
                    selfArray.indexOf(weakness) === index
                )
                ?.map(
                  (weakness) =>
                    weakness && (
                      <div className="types-list" key={weakness}>
                        <img
                          alt={weakness + " type"}
                          src={typesList[weakness].srcImage}
                          className={"type-" + weakness}
                          type="image/svg+xml"
                        />
                        <span>
                          {weakness.charAt(0).toUpperCase() + weakness.slice(1)}
                        </span>
                      </div>
                    )
                ) ?? <div className="loader"></div>}
            </div>
          </div>
          <div>
            <h5>Resistances</h5>
            <div className="weak-resist">
              {typesList[selectedPokemon?.types[0]]?.resistances
                ?.concat(
                  typesList[selectedPokemon?.types[1] ?? -1]?.resistances
                )
                ?.filter(
                  (resistance) =>
                    !typesList[selectedPokemon.types[0]].weaknesses
                      .concat(
                        typesList[selectedPokemon.types[1]]?.weaknesses,
                        typesList[selectedPokemon.types[0]].immunities,
                        typesList[selectedPokemon.types[1]]?.immunities
                      )
                      .includes(resistance)
                )
                ?.filter(
                  (resistance, index, selfArray) =>
                    selfArray.indexOf(resistance) === index
                )
                ?.map(
                  (resistance) =>
                    resistance && (
                      <div className="types-list" key={resistance}>
                        <img
                          alt={resistance + " type"}
                          src={typesList[resistance].srcImage}
                          className={"type-" + resistance}
                          type="image/svg+xml"
                        />
                        <span>
                          {resistance.charAt(0).toUpperCase() +
                            resistance.slice(1)}
                        </span>
                      </div>
                    )
                ) ?? <div className="loader"></div>}
            </div>
          </div>
          <div>
            <h5>Immunities</h5>
            <div className="weak-resist">
              {selectedPokemon?.types?.map((type) =>
                typesList[type]?.immunities?.map((immunity) => (
                  <div className="types-list" key={immunity}>
                    <img
                      alt={immunity + " type"}
                      src={typesList[immunity]?.srcImage}
                      className={"type-" + immunity}
                      type="image/svg+xml"
                    />
                    <span>{immunity}</span>
                  </div>
                ))
              ) ?? <div className="loader"></div>}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
