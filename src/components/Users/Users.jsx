import React, { useMemo } from "react";
import Input from "../UI/Input/Input";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Users.scss";

function Users(props) {
  const [players] = useLocalStorage([], "players");
  const deleteUser = (id) => {
    props.delete(id);
  };
  const searchUser = (value) => {
    props.search(value);
  };
  React.useEffect(() => {
    props.add(players);
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
