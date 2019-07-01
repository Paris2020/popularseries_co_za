import React from 'react';
import './App.css';

const Intro = (props) => (

  <p className="App-Intro">Our first functional component</p>

)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Series List</h1>
      </header>
      <Intro/>
    </div>
  );
}

export default App;
