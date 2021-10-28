import {
  DELETE_USER,
  SHOW_WINNER,
  SEARCH_USER,
  ADD_USER,
  CLEAR_INFO,
} from "../actions/userAC";

const initialState = {
  users: [],
  winner: {},
  searchedUser: "",
};
export const gameReducer = (state = initialState, action) => {
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
    case CLEAR_INFO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
