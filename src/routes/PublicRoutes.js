import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthorizedSelector, userRoleNameSelector } from "redux/selectors";
import { roles } from "./roles";

const PublicRoutes = ({ component: Component, ...routeProps }) => {
  const isLogIn = useSelector(isAuthorizedSelector);
  const roleName = useSelector(userRoleNameSelector);
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isLogIn ? (
          <Redirect to={{ pathname: roles[roleName], state: props.location }} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoutes;
