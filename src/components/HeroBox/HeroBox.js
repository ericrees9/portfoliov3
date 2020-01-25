import React, { useContext } from 'react';
import './HeroBox.css';
import { SiteContext } from '../../context';

const HeroBox = () => {
    const { state } = useContext(SiteContext);
    const isDev = state.devState === true;

    return(
        <div className="heroDiv">
            <h1 className="heroH1">ERIC REES</h1>
            {isDev &&
                <h3>DEVELOPMENT</h3>
            }
            {!isDev &&
                <h3>MARKETING</h3>
            }
        </div>
    );
}

export default HeroBox;