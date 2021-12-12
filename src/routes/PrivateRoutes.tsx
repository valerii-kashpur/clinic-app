import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { isAuthorizedSelector } from "redux/selectors";

type Props = { component: typeof React.Component };


const PrivateRoutes = ({ component: Component, ...routeProps }: Props) => {
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
