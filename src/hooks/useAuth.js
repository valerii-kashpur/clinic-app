import { register } from "network/fetchOperations";

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchToken } from "redux/userSlice";

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
      register(data, history);
  };

  return { registrationRequest, loginRequest };
};
