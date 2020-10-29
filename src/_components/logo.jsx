import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/" className={`logo ${props.className && props.className}`}>
      INGO
    </Link>
  );
};

export { Logo };
