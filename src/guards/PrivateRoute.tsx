import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }: any) {
  const { accessToken } = useSelector((state: AppState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
}

export default PrivateRoute;
