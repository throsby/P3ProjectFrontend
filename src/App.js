import logo from './logo.svg';
import './App.css';
import TowerBox from './TowerBox';
import Header from './Header'
import StatBox from './StatBox'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Header />
      <TowerBox />
      <StatBox />

    </div>
  );
}

export default App;
