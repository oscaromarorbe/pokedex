import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="pokedex-logo">
        <img src="/resources/pokedex-logo/pokedex.png" alt="Pokedex" />
      </div>
      <Search />
      <div>burger</div>
    </div>
  );
};

export default Header;
