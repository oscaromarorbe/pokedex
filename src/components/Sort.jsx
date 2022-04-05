import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadStatsList,
  removeStatsSorted,
  selectStatsList,
  selectStatsListLoading,
  selectStatsSorted,
  setStatsSorted,
} from "../store/statsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const statsList = useSelector(selectStatsList);
  const statsSorted = useSelector(selectStatsSorted);
  const statsListLoading = useSelector(selectStatsListLoading);
  useEffect(() => {
    dispatch(
      loadStatsList({
        id: false,
        endpoint: "stat",
        params: { limit: 6, offset: 0 },
      })
    );
  }, [dispatch]);
  const handleClick = (name) => {
    dispatch(
      statsSorted[name] === "DSC"
        ? removeStatsSorted(name)
        : setStatsSorted([name, !statsSorted[name] ? "ASC" : "DSC"])
    );
  };
  return (
    <div className="sort">
      {!statsListLoading ? (
        Object.values(statsList).map((stat) => {
          return (
            <div
              className={"stat-" + stat.name + " sort-stat"}
              id={
                statsSorted[stat.name] === "ASC" ||
                statsSorted[stat.name] === "DSC"
                  ? "sort-stat-active"
                  : ""
              }
              key={stat.name}
              onClick={() => handleClick(stat.name)}
            >
              <span className="stat-name">{stat.name.toUpperCase()}</span>
              <br />
              <span id={statsSorted[stat.name] === "ASC" ? "bold" : ""}>
                ASC
              </span>{" "}
              <span id={statsSorted[stat.name] === "DSC" ? "bold" : ""}>
                DESC
              </span>
            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Sort;
