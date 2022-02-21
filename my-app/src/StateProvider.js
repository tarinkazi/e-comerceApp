import React, {createContext, cretaeContext, useContext, userReducer} from "react";

//prepare the datalayer
export const stateContext = createContext();
//wrap app and provide datalayer
export const stateProvider =({reducer, innitialState, children}) => (<stateContext.Provider value={userReducer(reducer, initialState)}>
  {children}
</stateContext.Provider>
);

//pull information
export const useStateValue = () => useContext(stateContext);