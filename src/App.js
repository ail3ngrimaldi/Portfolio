import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import { Route } from 'react-router-dom';
import Hobbies from './components/Hobbies';
import Studies from './components/Studies';
import Jobs from './components/Jobs';

function App() {
  return (
    <div className="App">
     
      <ButtonAppBar />
      <Route
        exact path='/hobbies'
        render={() => <Hobbies/>}
      />
        <Route
        exact path='/jobs'
        render={() => <Jobs/>}
      />
          <Route
        exact path='/studies'
        render={() => <Studies/>}
      />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
