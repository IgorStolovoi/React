import { gameParams } from "../constants/gameParams";
import {
  ADD_TO_HISTORY,
  GO_TO_STEP,
  PLAYER_NAME,
  CHANGE_TURN,
  ADD_WINNER,
  GAME_END,
} from "../actions";

export const initialState = {
  isXTurn: true,
  history: [
    {
      squares: new Array(Math.pow(gameParams.size, 2)).fill(null),
    },
  ],
  players: {
    X: "",
    O: "",
  },
  gameStatus: {
    winners: [],
    end: false,
  },
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case GO_TO_STEP:
      return {
        ...state,
        history: [...state.history.slice(0, action.payload)],
      };
    case PLAYER_NAME:
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.name]: action.payload.value,
        },
      };
    case CHANGE_TURN:
      if (action.payload) {
        return {
          ...state,
          isXTurn: action.payload === "X" ? true : false,
        };
      }
      return {
        ...state,
        isXTurn: !state.isXTurn,
      };
    case ADD_WINNER:
      return {
        ...state,
        gameStatus: {
          ...state.gameStatus,
          winners: [...state.gameStatus.winners, ...action.payload],
        },
      };
    case GAME_END:
      return {
        ...state,
        gameStatus: {
          ...state.gameStatus,
          end: action.payload,
        },
      };
    default:
      return state;
  }
};
