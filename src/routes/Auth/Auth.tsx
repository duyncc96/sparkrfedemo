import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Login } from "../../pages/Login/Login";

export const Auth: React.FC = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
    </Switch>
  );
};
