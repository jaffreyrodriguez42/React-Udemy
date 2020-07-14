import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fName = "Jaff Rey";
  const dt = new Date();
  const year = dt.getFullYear();


  return (
    <div>
      <p>Created By {fName}.</p>
      <p>Copyright {year}</p>
    </div>
  );
}

export default App;
