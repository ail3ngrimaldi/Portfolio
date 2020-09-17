import React from 'react';
import './App.css';
import Home from './components/index';
import StickyFooter from './components/Footer2';

function App() {

  return (
    <div>
    <div style={{
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      minHeight: "500px"
    }}
    className="App"> 
    <Home/>
    </div> 
    <StickyFooter/>
  </div> 
  );
}

export default App;
