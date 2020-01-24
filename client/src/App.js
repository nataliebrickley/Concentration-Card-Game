import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./util/API"

function App() {
  return (
    <div className="App">
      <button onClick={() => handleClick()}>New Game</button>
    </div>
  );
}

function handleClick() {
  console.log("clicked")
  API.shuffle().then(res => {
    console.log("ok")
  })
}
export default App;
