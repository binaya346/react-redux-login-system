import React from "react";
import { Button, H2, H5, Input } from "../_components";
import { Navbar } from "../_layouts";

const Login = (props) => {
  const handleUsername = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Navbar page="login" />
      <div className="page-content">
        <div className="login-form-wrap">
          <H2 className="u-margin-bottom-sm u-text-center">Welcome back</H2>
          <H5 className="u-margin-bottom u-text-center sub-heading">
            Log in to access your dashboard, settings, published projects and
            snacks.
          </H5>
          <form name="login">
            <Input
              type="text"
              label="Email or username"
              name="email"
              onChange={handleUsername}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              forgotPassword
            />
            <Button className="btn--login">log in</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
