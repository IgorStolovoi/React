export const ADD_GAME = "Add-New-Game";
export const addGameAC = (game) => ({
  type: ADD_GAME,
  payload: game,
});
///////////////////
export const ADD_GAME_INFO = "Add-Game-Info";
export const addGameInfoAC = (info) => ({
  type: ADD_GAME_INFO,
  payload: info,
});
