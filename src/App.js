import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const img = "https://picsum.photos/200";

  return (
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">My Favorite Foods</h1>
      <img className="food-img" src="https://cdn.pixabay.com/photo/2020/01/17/13/18/sheep-4772994__340.jpg" alt="food-img" />
      <img className="food-img" src="https://cdn.pixabay.com/photo/2019/10/30/15/33/tajikistan-4589831__340.jpg" alt="food-img" />
      <img className="food-img" src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501__340.jpg" alt="food-img" />
      <img src={img + "?grayscale"} alt="randomImg" />
    </div>
  );
}

export default App;
