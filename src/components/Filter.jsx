import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemonListByType,
  setTypesFiltered,
  removeTypesFiltered,
  selectTypesFiltered,
} from "../store/pokemonSlice";
import { loadTypesList, selectTypesList } from "../store/typesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const typesList = useSelector(selectTypesList);
  const typesFiltered = useSelector(selectTypesFiltered);
  useEffect(() => {
    dispatch(loadTypesList({ id: false, params: { limit: 18, offset: 0 } }));
  }, [dispatch]);
  const handleClick = (name) => {
    dispatch(
      typesFiltered.includes(name)
        ? removeTypesFiltered(name)
        : setTypesFiltered(name)
    );
    //dispatch(filterPokemonListByType(typesFiltered));
  };
  return (
    <div className="filter">
      {Object.values(typesList).length > 0 ? (
        Object.values(typesList).map((type) => {
          return (
            <img
              key={type.name}
              alt={type.name + " type"}
              src={type.srcImage}
              onClick={() => handleClick(type.name)}
              id={typesFiltered.includes(type.name) && "type-active"}
              className={"type-" + type.name}
            />
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Filter;
