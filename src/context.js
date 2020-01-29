import React, { createContext, useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "devTrue":
      return { ...state, devState: true };
    case "devFalse":
      return { ...state, devState: false };
    default:
      return;
  }
};

const initialState = { devState: true };
const SiteContext = createContext(initialState);

const StateProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SiteContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SiteContext.Provider>
  );
};

export { StateProvider, SiteContext };
