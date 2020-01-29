import React, { useContext } from "react";
import "./Navbar.css";
import { SiteContext } from "../../context";

const Navbar = () => {
  const { state, dispatch } = useContext(SiteContext);

  console.log(state);

  return (
    <div className="Navbar">
      <div className="Name">
        <h1>ERIC REES</h1>
      </div>
      <div className="Menu">
        <h1 onClick={() => dispatch({ type: "toggle" })}>MENU</h1>
      </div>
    </div>
  );
};

export default Navbar;
