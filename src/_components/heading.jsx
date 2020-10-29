import React from "react";

export const H1 = (props) => {
  return <h1 className={`heading-one ${props.className}`}>{props.children}</h1>;
};

export const H2 = (props) => {
  return <h2 className={`heading-two ${props.className}`}>{props.children}</h2>;
};

export const H3 = (props) => {
  return (
    <h3 className={`heading-three ${props.className}`}>{props.children}</h3>
  );
};

export const H4 = (props) => {
  return (
    <h4 className={`heading-four ${props.className}`}>{props.children}</h4>
  );
};

export const H5 = (props) => {
  return (
    <h4 className={`heading-five ${props.className}`}>{props.children}</h4>
  );
};
