import React, { useContext } from "react";
import "./HeroBox.css";
import { DevContext } from "../../Contexts/devContext";

const HeroBox = () => {
  const { state } = useContext(DevContext);
  const isDev = state.devState === true;

  return (
    <div className="heroDiv">
      <h1 className="heroH1">ERIC REES</h1>
      {isDev && <h3>DEVELOPMENT</h3>}
      {!isDev && <h3>MARKETING</h3>}
    </div>
  );
};

export default HeroBox;
