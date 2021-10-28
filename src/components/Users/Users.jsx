import React, { useMemo } from "react";
import Input from "../UI/Input/Input";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./Users.scss";
import { useSelector } from "react-redux";

function Users(props) {
  const gameUsers = useSelector((state) => state.gameInfo);
  const deleteUser = (id) => {
    props.delete(id);
  };
  const searchUser = (value) => {
    props.search(value);
  };
  React.useEffect(() => {
    props.giveInfo({
      users: gameUsers.users,
      id: props.route.match.params.competitionId,
      winner: gameUsers.winner,
    });
  }, [gameUsers]);

  React.useEffect(() => {
    props.add(props.users);
    if (props.users.length) {
      props.addWinner();
    }
    return () => {
      props.clearInfo();
    };
  }, []);

  const filteredUsers = useMemo(() => {
    if (props.users.length) {
      return props.users.filter(({ firstName, id }) => {
        return (
          firstName.toLowerCase().includes(props.searchedUser.toLowerCase()) ||
          id.includes(props.searchedUser)
        );
      });
    }
    return props.users;
  }, [props.users, props.searchedUser]);

  return (
    <div className="users">
      <Input
        className="users__search"
        label="Enter paricipant name \ Id"
        value={props.searchedUser}
        onChange={(e) => {
          searchUser(e.target.value);
        }}
      />
      <div className="users__wrapper">
        {filteredUsers.map((player) => {
          return (
            <PlayerCard player={player} onClick={deleteUser} key={player.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
