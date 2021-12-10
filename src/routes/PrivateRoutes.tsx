import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { isAuthorizedSelector } from "redux/selectors";

const PrivateRoutes = ({ component: Component, ...routeProps }) => {
  const isLogIn = useSelector(isAuthorizedSelector);
  return (
    <Route
      {...routeProps}
      exact
      render={(props) => {
        return isLogIn ? <Component {...props} /> : null;
      }}
    />
  );
};

export default PrivateRoutes;
