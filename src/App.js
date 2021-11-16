import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import Trending from './Trending';
import About from './About';


function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="App">
      <header className="App-header">
        <h1> Music Gallery With React </h1>

        <nav>
          <div className="short">
            <button onClick={() => setActive("Home")} > Home </button>
            <button onClick={() => setActive("Trending")}> Trending </button>
            <button onClick={() => setActive("About")}> About-us </button>
            <button> Contact-us </button>
          </div>
        </nav>
        
        {active === "Home" && <Gallery />}
        {active === "Trending" && < Trending />}
        {active === "About" && <About />}

      </header>
    </div>
  );
}

export default App;
