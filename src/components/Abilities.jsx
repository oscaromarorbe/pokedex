import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSingleAbility,
  selectAbilitiesList,
} from "../store/abilitiesSlice";
import { selectSelectedPokemon } from "../store/pokemonSlice";

const Abilities = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const abilitiesList = useSelector(selectAbilitiesList);
  /* useEffect(() => {
    selectedPokemon.abilities.forEach((ability) => {
      dispatch(
        loadSingleAbility({ id: ability, endpoint: "ability" })
      );
    });
  }, [dispatch, abilitiesList, selectedPokemon?.abilities]); */
  return (
    <div>
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
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          </div>
        );
      }) ?? <div className="loader"></div>}
    </div>
  );
};

export default Abilities;
