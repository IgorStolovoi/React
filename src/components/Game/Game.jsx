import React from "react";
import "./Game.scss";
import Board from "../Board/Board";
import History from "../History/History";
import WinnersTable from "../WinnersTable/WinnersTable";
import Button from "../UI/Button/Button";
import { useGameStore } from "../../context";
import { getSignTurn, calculateWinner } from "../../utils";
import {
  addToHistory,
  goToStep,
  playerName,
  changeTurn,
  addWinner,
  gameEnd,
} from "../../actions";
import GameSettings from "../GameSettings/GameSettings";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

export default function Game() {
  const [state, dispatch] = useGameStore();
  const [winners, setWinners] = useLocalStorage([], "winners");

  const currentStep = state.history[state.history.length - 1];

  const handleClick = (i) => {
    const squares = [...currentStep.squares];
    squares[i] = getSignTurn(state.isXTurn);
    let winner = calculateWinner(squares);
    dispatch(addToHistory(squares));
    if (winner) {
      let winnerIs = state.players[winner] || winner;
      let dateString = Date.now();
      dispatch(addWinner([{ winner: winnerIs, time: dateString }]));
      setWinners([...winners, { winner: winnerIs, time: dateString }]);
      dispatch(gameEnd(true));
      return;
    }
    dispatch(changeTurn());
  };

  const resetGame = () => {
    let firstStep = state.history[1]?.squares.find((sign) => !!sign);
    dispatch(goToStep(1));
    whoFirst(firstStep || getSignTurn(state.isXTurn));
    dispatch(gameEnd(false));
  };

  const whoFirst = (sign) => {
    dispatch(changeTurn(sign));
  };

  const changeStep = (step) => {
    dispatch(goToStep(step));
  };

  const inputName = (name) => {
    dispatch(playerName(name));
  };

  const giveUp = () => {
    let winnerIs =
      state.players[getSignTurn(!state.isXTurn)] || getSignTurn(!state.isXTurn);
    let dateString = Date.now();
    dispatch(addWinner([{ winner: winnerIs, time: dateString }]));
    setWinners([...winners, { winner: winnerIs, time: dateString }]);
    dispatch(gameEnd(true));
    dispatch(changeTurn(getSignTurn(state.isXTurn)));
  };

  React.useEffect(() => {
    dispatch(addWinner(winners));
  }, []);

  return (
    <>
      <GameSettings
        onInputChange={inputName}
        onSelectChange={whoFirst}
        inputValue={state.players}
        disabled={state.history.length > 1}
      />

      <div className="gameBtn">
        {state.gameStatus.end ? (
          <Button onClick={resetGame}>Start new game</Button>
        ) : (
          <Button onClick={giveUp}>Give up</Button>
        )}
      </div>

      <div className="game">
        <div className="futureWinner">
          <h3>
            {state.gameStatus.end
              ? `Winner is ${
                  state.gameStatus.winners[state.gameStatus.winners.length - 1]
                    .winner
                }`
              : `Now ${
                  state.players[getSignTurn(state.isXTurn)] ||
                  getSignTurn(state.isXTurn)
                } turn`}
          </h3>
        </div>
        <Board
          squares={currentStep.squares}
          onClick={handleClick}
          status={state.gameStatus.end}
        />
        <History steps={state.history} onClick={changeStep} />
      </div>
      <WinnersTable winners={state.gameStatus.winners} />
    </>
  );
}
