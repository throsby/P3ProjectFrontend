import logo from './logo.svg';
import './App.css';

import { useEffect } from "react"

function App() {

  useEffect(
    fetch("")
  , [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
