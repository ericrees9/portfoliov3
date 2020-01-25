import React, { useState, useContext } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import SwitchBar from "./components/SwitchBar/SwitchBar"
import { StateProvider } from './context';

const App = () => {
  return (
    <div className="App">
      <StateProvider>
        <Home className="Home" />
        <SwitchBar className="SwitchBar" />
      </StateProvider>
    </div>
  );
}

export default App;
