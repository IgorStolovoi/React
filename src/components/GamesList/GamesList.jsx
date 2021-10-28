import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import GameCard from "../GameCard/GameCard";
import { useMemo, useState } from "react";
import Input from "../UI/Input/Input";
import "./GameList.scss";
function GamesList() {
  const [inputState, setInputState] = useState("");
  const history = useHistory();
  const games = useSelector((state) => state.games);
  const gameClick = (id) => {
    history.push(`/competition/${id}`);
  };
  const filteredGames = useMemo(() => {
    if (games.length) {
      return games.filter(({ name, id }) => {
        return (
          name.toLowerCase().includes(inputState.toLowerCase()) ||
          id.includes(inputState)
        );
      });
    }
    return games;
  }, [games, inputState]);
  return (
    <div className="games">
      <PrimaryButton
        sx={{ margin: "0 auto", display: "block" }}
        onClick={() => {
          history.push("/create");
        }}
      >
        Create new Game
      </PrimaryButton>
      <div className="games__search">
        <Input
          label="Enter game name \ Id"
          value={inputState}
          onChange={(e) => {
            setInputState(e.target.value);
          }}
        />
      </div>

      <div className="games__list">
        {filteredGames.map((game) => (
          <GameCard game={game} onClick={gameClick} />
        ))}
      </div>
    </div>
  );
}

export default GamesList;
