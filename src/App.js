import logo from './logo.svg';
import './App.css';

import { useEffect } from "react"

function App() {

  useEffect(() => { async function fetchData() {
    let req = await fetch("http://localhost:9292/")
    let res = await req.json()
    console.log(res)
    }
    fetchData()
  }, [] )

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
