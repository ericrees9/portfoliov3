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
const DevContext = createContext(initialState);

const DevProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DevContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DevContext.Provider>
  );
};

export { DevProvider, DevContext };
