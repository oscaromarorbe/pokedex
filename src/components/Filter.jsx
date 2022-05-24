import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAbilitiesList,
  selectAbilitiesList,
} from "../store/abilitiesSlice";
import {
  setTypesFiltered,
  removeTypesFiltered,
  selectTypesFiltered,
} from "../store/pokemonSlice";
import {
  loadTypesList,
  selectTypesList,
  selectTypesListLoading,
} from "../store/typesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const typesList = useSelector(selectTypesList);
  const typesFiltered = useSelector(selectTypesFiltered);
  const typesListLoading = useSelector(selectTypesListLoading);
  const abilitiesList = useSelector(selectAbilitiesList);
  useEffect(
    () => {
      if (Object.values(typesList).length === 0) {
        dispatch(
          loadTypesList({
            id: false,
            endpoint: "type",
            params: { limit: 18, offset: 0 },
          })
        );
      }
    },
    [
      /* dispatch, typesList */
    ]
  );
  useEffect(
    () => {
      if (Object.values(abilitiesList).length === 0) {
        dispatch(
          loadAbilitiesList({
            id: false,
            endpoint: "ability",
            params: { limit: 327 },
          })
        );
      }
    },
    [
      /* dispatch, abilitiesList */
    ]
  );
  const handleClick = (name) => {
    dispatch(
      typesFiltered.includes(name)
        ? removeTypesFiltered(name)
        : setTypesFiltered(name)
    );
  };
  return (
    <div className="filter">
      {!typesListLoading ? (
        Object.values(typesList).map((type, index) => {
          return (
            <div className="filter-item" key={type.name}>
              <img
                key={type.name}
                alt={type.name + " type"}
                src={type.srcImage}
                onClick={() => handleClick(type.name)}
                id={
                  typesFiltered.includes(type.name)
                    ? "type-active"
                    : "filter-item-id-" + index
                }
                className={"type-" + type.name}
                type="image/svg+xml"
              />
              <span>{type.name.toUpperCase()}</span>
            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Filter;
