export const ADD_TO_HISTORY = "add to history";
export const GO_TO_STEP = "back to step";
export const PLAYER_NAME = "input name";
export const CHANGE_TURN = "change turn";
export const ADD_WINNER = "add winner";
export const GAME_END = "game end";

export const addToHistory = (squares) => ({
  type: ADD_TO_HISTORY,
  payload: { squares },
});

export const goToStep = (step) => ({
  type: GO_TO_STEP,
  payload: step,
});

export const playerName = (name) => ({
  type: PLAYER_NAME,
  payload: name,
});

export const changeTurn = (turn) => ({
  type: CHANGE_TURN,
  payload: turn,
});

export const addWinner = (winner) => ({
  type: ADD_WINNER,
  payload: winner,
});

export const gameEnd = (status) => ({
  type: GAME_END,
  payload: status,
});
