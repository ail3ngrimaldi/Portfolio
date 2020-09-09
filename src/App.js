import React from 'react';
import './App.css';
import Header from './components/Header'
// import Particles from 'react-particles-js';
// import { useEffect } from 'react';

function App() {

  // var url = "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js";

  // const useScript = url => {
  //   useEffect(() => {
  //     const script = document.createElement('script');
  
  //     script.src = url;
  //     script.async = true;
  
  //     document.body.appendChild(script);
      
      // return () => {
      //   document.body.removeChild(script);
      // }

  //   }, [url]);
  // };
  //useScript(url)

  return (
    <div     style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
    className="App"> 

    <Header/>
    {/* <Particles 
      params={{
        "polygon": {
          "enable": true,
          "type": 'inside',
          "move": {
              radius: 10
          },
        
      },
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }} 
    /> */}
  </div> 
  );
}

export default App;
