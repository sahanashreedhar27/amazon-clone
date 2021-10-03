// To set up the data layer
// keep the track of the user
// To keep the track of the basket
import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// To use it inside of a component
export const useStateValue = () => useContext(StateContext);
