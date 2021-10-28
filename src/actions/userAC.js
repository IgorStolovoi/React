export const DELETE_USER = "Delete-User";
export const deleteUserAC = (id) => ({
  type: DELETE_USER,
  payload: id,
});
//////////////////////
export const SEARCH_USER = "Search-User";
export const searchUserAC = (text) => ({
  type: SEARCH_USER,
  payload: text,
});
//////////////////////
export const ADD_USER = "Add-User";
export const addUserAC = (user) => ({
  type: ADD_USER,
  payload: user,
});
//////////////////////
export const SHOW_WINNER = "Show-Winner";
export const showWinnerAC = () => ({
  type: SHOW_WINNER,
});
////////////////
export const CLEAR_INFO = "Clear_Info";
export const clearInfoAC = () => ({
  type: CLEAR_INFO,
});
