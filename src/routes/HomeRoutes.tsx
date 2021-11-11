import React from "react";
import { Switch } from "react-router";
import PrivateRoute from "../guards/PrivateRoute";
import { Home } from "../pages/Home/Home";

export const HomeRoutes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  );
};
