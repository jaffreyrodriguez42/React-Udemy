import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const customStyle = {
    color: ""
  }

  let greeting;

  const dt = new Date();

  const currentTime = dt.getHours();

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>{greeting}</h1>
  );
}

export default App;
