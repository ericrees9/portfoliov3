import React, { createContext, useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "menuOpen":
      return { ...state, menuState: true };
    case "menuClose":
      return { ...state, menuState: false };
    default:
      return;
  }
};

const initialState = { menuState: false };
const MenuContext = createContext(initialState);

const MenuProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
