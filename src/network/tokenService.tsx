import { store } from "redux/store";

export const getToken = () => {
  const state = store.getState();
  const token = state.user.token;
  return token;
};

export const callback = () => {
//   console.log("hello");
};
