import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Login } from "./Login";

export const Auth: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
