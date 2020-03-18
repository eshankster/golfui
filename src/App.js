/**
 * App
 * - displays some text and calls PlayerSelect component
 * 
 * ffriel
 * 17/03/2020
 */
import React from 'react';
import './App.css';
import PlayerSelect from './components/PlayerSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="headertext">
          PGA Player Statistics (2010 to 2018)
        </p>
        <p className="paratext">
          Select a player and then a statistic variable to see results (where available) from 2010 to 2018.
        </p>
        <PlayerSelect />
      </header>
    </div>
  );
}

export default App;
