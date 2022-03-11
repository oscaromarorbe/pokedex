import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTypesList, selectTypesList } from "../store/typesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const typesList = useSelector(selectTypesList);
  useEffect(() => {
    dispatch(loadTypesList({ id: false, params: { limit: 18, offset: 0 } }));
  }, [dispatch]);
  return (
    <div className="filter">
      {Object.values(typesList).length > 0 ? (
        Object.values(typesList).map((type) => {
          return (
            <img
              key={type.name}
              alt={type.name + " type"}
              src={type.srcImage}
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
