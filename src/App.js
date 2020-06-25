import React from 'react';
import Home from './Home';
import logo from './assets/randomly.svg';

const App = () => {
  return (
    <div className="App container is-fluid">
      <nav className="navbar is-flex content-center" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <img className="logo" src={logo} alt="randomly logo" />
        </div>
        <div className="navbar-item">
          <a href="https://github.com/alexpierola/randomly">
            <strong>View on GitHub</strong>
          </a>
        </div>
        <div className="navbar-item">
          Made by
          <a href="https://github.com/alexpierola/">
            <strong>&nbsp;Alex Pierola</strong>
          </a>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
