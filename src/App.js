import React from 'react';
import './App.css';
import Home from './components/index'
// import { colors } from '@material-ui/core';

function App() {

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      colors: "black"
    }}
    className="App"> 
    <Home/>
  </div> 
  );
}

export default App;
