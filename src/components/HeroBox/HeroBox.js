import React, { useContext } from 'react';
import './HeroBox.css';
import { SiteContext } from '../../context';

const HeroBox = () => {
    const { state } = useContext(SiteContext);
    const isDev = state.devState === true;

    return(
        <div className="heroDiv">
            <h2>ERIC REES</h2>
            {isDev &&
                <h3>is a developer.</h3>
            }
            {!isDev &&
                <h3>is a marketer.</h3>
            }
        </div>
    );
}

export default HeroBox;