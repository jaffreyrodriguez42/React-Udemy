import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fName = "Jaff";
  const lName = "Rodriguez";
  const luckyNum = 7;

  return (
    <div>
      <h1>
        Hello {fName + " " + lName}!
      </h1>
      <p>My lucky numbers are {luckyNum} and {Math.floor(Math.random() * 10)}</p>

    </div>
  );
}

export default App;
