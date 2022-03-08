import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPokemonList, selectPokemonList } from "../store/pokemonSlice";
import Card from "./Card";

const List = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList) ?? false;
  useEffect(() => {
    dispatch(loadPokemonList({ id: false, params: { limit: 20, offset: 0 } }));
  }, [dispatch]);
  return (
    <div>
      <ul className="card-holder">
        {Object.values(pokemonList).length > 0 ? (
          Object.values(pokemonList).map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} />;
          })
        ) : (
          <div className="loader"></div>
        )}
      </ul>
    </div>
  );
};

export default List;
