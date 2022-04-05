import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  useEffect(() => {
    dispatch(
      loadTypesList({
        id: false,
        endpoint: "type",
        params: { limit: 18, offset: 0 },
      })
    );
  }, [dispatch]);
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
        Object.values(typesList).map((type) => {
          return (
            <div className="filter-item">
              <img
                key={type.name}
                alt={type.name + " type"}
                src={type.srcImage}
                onClick={() => handleClick(type.name)}
                id={typesFiltered.includes(type.name) && "type-active"}
                className={"type-" + type.name}
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
