import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../store/pokemonSlice";

const Search = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setSearchTerm(value));
  };
  return (
    <div className="search-holder">
      <input
        onChange={({ target }) => handleChange(target)}
        value={searchTerm}
        className="search"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
