import React, { useState, useContext } from "react";
import "./Home.css";
import { DevContext } from "../../Contexts/devContext";
// import { MenuContext } from "../../Contexts/menuContext";
import HeroBox from "../HeroBox/HeroBox";
import Navbar from "../Navbar/Navbar";
import Timeline from "../Timeline/Timeline";

const Home = () => {
  const { state } = useContext(DevContext);
  const isDev = state.devState === true;
  // const { state } = useContext(MenuContext);
  // const isMenu = state.menuState === true;
  const [heroopen, setHeroopen] = useState(true);
  const isOpen = heroopen === true;

  // console.log(state);

  return (
    <div className="Home" onClick={() => setHeroopen(false)}>
      {isOpen && (
        <div className="HeroBox">
          <HeroBox />
        </div>
      )}
      {!isOpen && (
        <div className="Content">
          <Navbar />
          <div className="Timeline">
            <Timeline />
            <Timeline />
            <Timeline />
            <Timeline />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
