import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadStatsList,
  selectStatsList,
  selectStatsSorted,
  setStatsSorted,
} from "../store/statsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const statsList = useSelector(selectStatsList);
  const statsSorted = useSelector(selectStatsSorted);
  useEffect(() => {
    dispatch(loadStatsList({ id: false, params: { limit: 6, offset: 0 } }));
  }, [dispatch]);
  const handleClick = (name) => {
    dispatch(
      setStatsSorted([
        name,
        !statsSorted[name]
          ? "ASC"
          : statsSorted[name] === "ASC"
          ? "DSC"
          : false,
      ])
    );
  };
  return (
    <div className="sort">
      {Object.values(statsList).length > 0 ? (
        Object.values(statsList).map((stat) => {
          return (
            <button key={stat.name} onClick={() => handleClick(stat.name)}>
              {stat.name.split("-").join("\n") + " ↑ ↓"}
            </button>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Sort;
