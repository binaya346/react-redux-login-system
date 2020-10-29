import React from "react";
import { userService } from "./_actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Signup } from "./_pages";
import "./sass/main.scss";

function App() {
  userService.register();
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  );
}
export default App;
