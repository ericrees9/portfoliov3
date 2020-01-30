import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
// import SwitchBar from "./components/SwitchBar/SwitchBar";
import { DevProvider } from "./Contexts/devContext";
// import { MenuProvider } from "./Contexts/menuContext";

const App = () => {
  return (
    <div className="App">
      <DevProvider>
        <Home className="Home" />
      </DevProvider>
    </div>
  );
};

export default App;
