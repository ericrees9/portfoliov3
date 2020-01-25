import React, { useState, useContext } from 'react';
import { SiteContext } from '../../context';

const Home = () => {
    const { state, dispatch } = useContext(SiteContext);
    
    const isDev = state.devState == true;

    console.log(state);

    return(
        <div>
            <h1>This is the home page.</h1>
            <div>
                {isDev &&
                    <h3>Eric is a developer.</h3>
                }
                {!isDev &&
                    <h3>Eric is a marketer.</h3>
                }
            </div>
        </div>
    );
}

export default Home;