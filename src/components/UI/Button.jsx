import React from "react";

function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} className={props.className}>
      {children}
    </button>
  );
}

export default Button;
