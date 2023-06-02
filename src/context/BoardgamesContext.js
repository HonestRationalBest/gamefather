export const initialBoardgamesState = {
  boardgames: [
    {
      id: "1",
      name: "Catan",
      description:
        "A game of trading and building in a world that is constantly changing.",
      numberOfPlayers: "3-4",
      playtime: "1-2 hours",
    },
    {
      id: "2",
      name: "Ticket to Ride",
      description:
        "A railway-themed board game where players connect cities across North America.",
      numberOfPlayers: "2-5",
      playtime: "1-2 hours",
    },
    {
      id: "3",
      name: "Carcassonne",
      description:
        "A tile-placement game where players draw and place a tile with a piece of southern French landscape on it.",
      numberOfPlayers: "2-5",
      playtime: "30-45 minutes",
    },
  ],
};

export function boardgamesReducer(state, action) {
  switch (action.type) {
    case "SET_BOARDGAMES":
      return action.payload;
    case "ADD_BOARDGAME":
      return [...state, action.payload];
    case "UPDATE_BOARDGAME":
      return state.map((game) =>
        game.id === action.payload.id ? action.payload : game
      );
    case "REMOVE_BOARDGAME":
      return state.filter((game) => game.id !== action.payload);
    default:
      return state;
  }
}
