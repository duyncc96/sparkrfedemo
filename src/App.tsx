import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Auth } from "./routes/Auth";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
