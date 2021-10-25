import { DELETE_USER, SHOW_WINNER } from "../actions/userAC";
import { SEARCH_USER } from "../actions/userAC";
import { ADD_USER } from "../actions/userAC";
const initialState = {
  users: [],
  winner: {},
  searchedUser: "",
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== action.payload),
      };
    case SEARCH_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case SHOW_WINNER:
      return {
        ...state,
        winner: [...state.users].sort((x, y) => y.time - x.time).pop(),
      };
    default:
      return state;
  }
};
