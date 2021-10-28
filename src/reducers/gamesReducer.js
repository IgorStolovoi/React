import { ADD_GAME, ADD_GAME_INFO } from "../actions/gamesAC";

const initialState = [];

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return [
        ...state,
        {
          ...action.payload,
          status: "active",
          users: [],
          winner: {},
        },
      ];
    case ADD_GAME_INFO:
      const changedGameInfo = state.map((game, i) => {
        if (+game.id === +action.payload.id) {
          return {
            ...state[i],
            users: action.payload.users,
            winner: action.payload.winner,
            status: Object.entries(action.payload.winner).length
              ? "finished"
              : "active",
          };
        }
        return game;
      });
      return [...changedGameInfo];

    default:
      return state;
  }
};
