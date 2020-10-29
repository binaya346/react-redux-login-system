import React from "react";

const Button = (props) => {
  return (
    <div
      className={`btn ${props.className && props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export { Button };
