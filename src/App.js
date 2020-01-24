import React, { useState, useContext } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import { StateProvider } from './context';

const App = () => {
  return (
    <div className="App">
     <StateProvider>
      <Home />
     </StateProvider>
    </div>
  );
}

export default App;
