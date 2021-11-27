import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthentificated } from "Redux/selectors";

const PrivateRoutes = ({ component: Component, ...routeProps }) => {
  const isLogIn = useSelector((state) => isAuthentificated(state));
  return (
    <Route
      {...routeProps}
      exact
      render={(props) => {
        return isLogIn ? (
          <Component {...props} />
        ) : (
          null
        );
      }}
    />
  );
};

export default PrivateRoutes;
