import "./App.css";
import Modal from "./components/Modal";
import List from "./components/List";
import { useSelector } from "react-redux";
import { selectSelectedPokemon } from "./store/pokemonSlice";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

function App() {
  const selectedPokemon = useSelector(selectSelectedPokemon);
  return (
    <div className="App">
      <Header />
      <Filter />
      <List />
      <Sort />
      {/* <div className="dark-symbol">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <Modal active={selectedPokemon} />
    </div>
  );
}

export default App;
