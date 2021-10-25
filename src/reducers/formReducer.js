import { INPUT_VALUE, RESET_FIELDS } from "../actions/formAC";

const initialState = {
  firstName: "",
  secondName: "",
  time: "",
};
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FIELDS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
