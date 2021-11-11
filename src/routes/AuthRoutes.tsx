import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../pages/Login/Login";

export const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
    </Switch>
  );
};
