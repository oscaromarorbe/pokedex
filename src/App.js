import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import { pokemonClefairy } from "./responses";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="loader"></div> */}
      <List />
      <Modal pokemon={pokemonClefairy} />
    </div>
  );
}

export default App;
