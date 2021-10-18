import React from "react";
import "./History.scss";

function History({ steps, onClick }) {
  return (
    <div className="history">
      <h3>Your steps</h3>
      {steps.map((el, ind) => {
        if (ind) {
          return (
            <button
              key={ind}
              onClick={() => {
                onClick(ind);
              }}
            >
              Go to {ind} step
            </button>
          );
        }
        return "";
      })}
    </div>
  );
}

export default History;
