import React, { useContext } from "react";
import "./SwitchBar.css";
import { DevContext } from "../../Contexts/devContext";

const SwitchBar = () => {
  const { state, dispatch } = useContext(DevContext);

  return (
    <div className="switchDiv">
      <div className="devSwitch" onClick={() => dispatch({ type: "devTrue" })}>
        <h6>Development</h6>
      </div>
      <div
        className="markSwitch"
        onClick={() => dispatch({ type: "devFalse" })}
      >
        <h6>Marketing</h6>
      </div>
    </div>
  );
};

export default SwitchBar;
