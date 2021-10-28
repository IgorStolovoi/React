import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { gamesReducer } from "./gamesReducer";
import { formReducer } from "./formReducer";
export const rootReducer = combineReducers({
  games: gamesReducer,
  gameInfo: gameReducer,
  newPlayer: formReducer,
});
