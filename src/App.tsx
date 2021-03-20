import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build and deploy this React Application<br/>
          by different CI/CD tools
        </p>
        <div>🤞🏻</div>
      </header>
    </div>
  );
}

export default App;
