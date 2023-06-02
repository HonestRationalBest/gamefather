import React, { createContext, useReducer } from "react";
import combineReducers from "./combineReducers";
import { initialUserState, userReducer } from "./UserContext";
import { boardgamesReducer, initialBoardgamesState } from "./BoardgamesContext";
import { eventsReducer, initialEventsState } from "./EventContext";

const initialState = {
  ...initialUserState,
  ...initialBoardgamesState,
  ...initialEventsState,
};

const rootReducer = combineReducers({
  user: userReducer,
  boardgames: boardgamesReducer,
  events: eventsReducer,
});

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
