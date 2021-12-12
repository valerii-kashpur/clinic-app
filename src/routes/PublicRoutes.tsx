import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthorizedSelector, userRoleNameSelector } from "redux/selectors";
import { roles } from "./roles";

type PublicRoutesParams = {
  component:  typeof React.Component,
};

const PublicRoutes = ({ component: Component, ...routeProps }: PublicRoutesParams) => {
  const isLogIn = useSelector(isAuthorizedSelector);
  const roleName: string = useSelector(userRoleNameSelector);
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
