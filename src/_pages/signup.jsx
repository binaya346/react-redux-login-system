import React from "react";
import { Navbar } from "../_layouts";
import { H2, H5, Input, Button } from "../_components";

const Signup = (props) => {
  return (
    <>
      <Navbar page="signup" />
      <div className="page-content">
        <div className="login-form-wrap">
          <H2 className="u-margin-bottom-sm u-text-center">
            Create Your Account
          </H2>
          <H5 className="u-margin-bottom u-text-center sub-heading">
            Create an account to view and manage your projects.
          </H5>
          <form name="signup">
            <Input type="text" label="Email" name="email" />
            <Input type="text" label="Username" name="username" />
            <Input type="password" label="Password" name="password" />
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <Button className="btn--login">Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Signup };
