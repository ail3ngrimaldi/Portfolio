import React from 'react';
import './App.css';
import Home from './components/index';
import Footer from './components/Footer';

function App() {

  return (
    <div style={{
      position: "absolute",
      // top: 0,
      // left: 0,
      width: "100%",
      height: "100%",
    }}
    className="App"> 
    <Home/>
    <Footer/>
  </div> 
  );
}

export default App;
