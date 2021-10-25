import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { formReducer } from "./formReducer";
export const rootReducer = combineReducers({
  playersInfo: usersReducer,
  newPlayer: formReducer,
});
