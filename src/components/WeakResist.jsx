import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedPokemon } from "../store/pokemonSlice";
import { selectTypesList } from "../store/typesSlice";

const WeakResist = (props) => {
  const typesList = useSelector(selectTypesList);
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const listWeaknesses = (pokemon) => {
    const types = pokemon.types;
    const resistances = pokemon.types.map(
      (type) => typesList[type].resistances
    );
    const immunities = pokemon.types.map((type) => typesList[type].immunities);
    const weaknesses = pokemon.types
      .map((type) => typesList[type].weaknesses)
      .filter((weakness, index) => {
        return (
          !resistances.includes(weakness) &&
          !immunities.includes(weakness) &&
          !types.includes(weakness)
        );
      });
    return weaknesses;
  };
  const listResistances = (pokemon) => {
    const weaknesses = pokemon.types.map((type) => typesList[type].weaknesses);
    const immunities = pokemon.types.map((type) => typesList[type].immunities);
    const resistances = pokemon.types
      .map((type) => typesList[type].resistances)
      .filter((resistance, index) => {
        return (
          !weaknesses.includes(resistance) && !immunities.includes(resistance)
        );
      });
    return resistances;
  };
  const listImmunities = (pokemon) => {
    const immunities = pokemon.types.map((type) => typesList[type].immunities);
    return immunities;
  };
  return (
    <>
      <div>
        <h5>Weaknesses</h5>
        <div className="weak-resist">
          {listWeaknesses(selectedPokemon)?.map((weakness) => (
            <div className="types-list" key={weakness}>
              <img
                alt={weakness + " type"}
                src={typesList[weakness]?.srcImage}
                className={"type-" + weakness}
              />
              <span>{weakness}</span>
            </div>
          )) ?? <div className="loader"></div>}
        </div>
      </div>
      <div>
        <h5>Resistances</h5>
        <div className="weak-resist">
          {listResistances(selectedPokemon)?.map((resistance) => (
            <div className="types-list" key={resistance}>
              <img
                alt={resistance + " type"}
                src={typesList[resistance]?.srcImage}
                className={"type-" + resistance}
              />
              <span>{resistance}</span>
            </div>
          )) ?? <div className="loader"></div>}
        </div>
      </div>
      <div>
        <h5>Immunities</h5>
        <div className="weak-resist">
          {listImmunities(selectedPokemon)?.map((immunity) => (
            <div className="types-list" key={immunity}>
              <img
                alt={immunity + " type"}
                src={typesList[immunity]?.srcImage}
                className={"type-" + immunity}
              />
              <span>{immunity}</span>
            </div>
          )) ?? <div className="loader"></div>}
        </div>
      </div>
    </>
  );
};

export default WeakResist;
