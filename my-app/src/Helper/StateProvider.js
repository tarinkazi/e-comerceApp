import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

//prepare the datalayer
export const stateContext = createContext();
//wrap app and provide datalayer
export const StateProvider = ({ reducer, innitialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

//pull information
export const useStateValue = () => useContext(stateContext);
