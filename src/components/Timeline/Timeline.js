import React, { useContext } from "react";
import "./Timeline.css";
import { SiteContext } from "../../context";

const Timeline = () => {
  const { state } = useContext(SiteContext);
  const isDev = state.devState === true;

  return (
    <div className="Box">
      {isDev && <h1>Eric is a developer.</h1>}
      {!isDev && <h1>Eric is a marketer.</h1>}
    </div>
  );
};

export default Timeline;
