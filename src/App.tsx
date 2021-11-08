import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import "./App.css";
import { Auth } from "./routes/Auth";
import { Main } from "./routes/Main";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
