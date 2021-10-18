import React from "react";
import { v4 as key } from "uuid";
import "./WinnersTable.scss";

function WinnersTable({ winners }) {
  return (
    <>
      <h3 className="tableTitle">Таблица побетилей</h3>
      <table className="winners" border="1">
        <tr key={key()}>
          <th key={key()}>Winner</th>
          <th key={key()}>Time</th>
        </tr>
        {winners &&
          winners.map(({ winner, time }) => {
            let winTime = `${new Date(time).toUTCString()}`;
            return (
              <tr key={key()}>
                <td key={key()}>{winner}</td>
                <td key={key()}>{winTime}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default WinnersTable;
