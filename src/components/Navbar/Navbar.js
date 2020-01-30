import React, { useContext } from "react";
import "./Navbar.css";
import SwitchBar from "../SwitchBar/SwitchBar";
import { MenuContext } from "../../Contexts/menuContext";

const Navbar = () => {
  const { state, dispatch } = useContext(MenuContext);

  console.log(state);

  return (
    <div className="Navbar">
      <div className="Name">
        <h1>ERIC REES</h1>
      </div>
      <div className="Switch">
        <SwitchBar />
      </div>
      <div className="Menu">
        <h1 onClick={() => dispatch({ type: "menuOpen" })}>MENU</h1>
      </div>
    </div>
  );
};

export default Navbar;
