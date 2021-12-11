import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { isAuthorizedSelector } from "redux/selectors";

type PrivateRouteParams = {
  component: React.FC,
}


const PrivateRoutes = ({ component: Component, ...routeProps }: PrivateRouteParams) => {
  const isLogIn = useSelector(isAuthorizedSelector);
  return (
    <Route
      {...routeProps}
      exact
      render={(props) => {
         // @ts-ignore: Unreachable code error
        return isLogIn ? <Component {...props} /> : null;
      }}
    />
  );
};

export default PrivateRoutes;
