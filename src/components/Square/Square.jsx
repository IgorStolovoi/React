import React from "react";
import "./Square.scss";

export default function Square({ value, onClick, status }) {
  const classes = ["btn"];

  if (value || status) {
    classes.push("disabled");
  }

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={value || status}
    >
      {value}
    </button>
  );
}
