import React, { useState, useContext } from 'react';
import "./Home.css";
import { SiteContext } from '../../context';
import HeroBox from "../HeroBox/HeroBox";

const Home = () => {
    const { state } = useContext(SiteContext);
    const isDev = state.devState === true;
    const [heroopen, setHeroopen] = useState(true);
    const isOpen = heroopen === true;

    console.log(state);

    return(
        <div className="Home">
            {isOpen && 
                <div className="HeroBox" onClick={() => setHeroopen(false)}>
                    <HeroBox />
                </div>
            }
            {!isOpen &&
                <div className="Timeline">
                    {isDev &&
                        <h3>Eric is a developer.</h3>
                    }
                    {!isDev &&
                        <h3>Eric is a marketer.</h3>
                    }
                </div>
            }
        </div>
    );
}

export default Home;