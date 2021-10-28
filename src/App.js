import { Route, Switch, Redirect } from "react-router-dom";
import GamesList from "./components/GamesList/GamesList";
import Game from "./components/Game/Game";
import CreateGame from "./components/CreateGame/CreateGame";
import "./App.scss";
function App() {
  return (
    <div className="game">
      <Switch>
        <Route path="/" exact component={GamesList} />
        <Route path="/competition/:competitionId" exact component={Game} />
        <Route path="/create" exact component={CreateGame} />
        <Route
          path="/error"
          render={() => {
            alert("Some Error");
          }}
        />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
