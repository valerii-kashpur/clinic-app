import { register } from "network/fetchOperations";
import { notify } from "notifications";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchToken } from "redux/userSlice";
import PATHS from "routes/paths";

export const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginRequest = useCallback(
    (data) => {
      dispatch(fetchToken(data));
    },
    [dispatch]
  );

  const registrationRequest = (data) => {
    register(data)
      .then(() => {
        notify(201);
      })
      .then(() => history.push(PATHS.signIn));
  };

  return { registrationRequest, loginRequest };
};
