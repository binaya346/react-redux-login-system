import React from "react";
import { Button, Logo } from "../_components";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo />
      {props.page === "signup" && (
        <Link to="/login" className="btn btn--login-navbar">
          Log in
        </Link>
      )}

      {props.page === "login" && (
        <Link to="/signup" className="btn btn--login-navbar">
          Sign up
        </Link>
      )}
    </div>
  );
};

export { Navbar };
