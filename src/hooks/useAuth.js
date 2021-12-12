import { register } from "network/fetchOperations";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { fetchToken } from "redux/slices/userSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useAuth = () => {
  const dispatch = useAppDispatch();
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
