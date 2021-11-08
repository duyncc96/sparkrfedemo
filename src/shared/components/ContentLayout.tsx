import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../../routes/Dashboard/Dashboard";

export const ContentLayout: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};
