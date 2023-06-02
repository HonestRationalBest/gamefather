export const initialEventsState = {
  events: [],
};

export function eventsReducer(state = initialEventsState, action) {
  switch (action.type) {
    case "SET_EVENTS":
      return action.payload;
    case "ADD_EVENT":
      return [...state, action.payload];
    case "UPDATE_EVENT":
      return state.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    case "REMOVE_EVENT":
      return state.filter((event) => event.id !== action.payload);
    default:
      return state;
  }
}
