import { createSlice } from "@reduxjs/toolkit";


type InitialState = {
  id: string,
  firstName: string,
  lastName: string,
  photo: string,
  roleName: string,
  isAuthorized: boolean,
  token: string,
  loading: boolean,
}


const initialState: InitialState = {
  id: "",
  firstName: "",
  lastName: "",
  photo: "",
  roleName: "",
  isAuthorized: false,
  token: "",
  loading: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, ...payload };
    },
    fetchToken(state) {
      state.loading = true;
    },
    fetchTokenSuccess(state, { payload }) {
      state.loading = false;
      state.token = payload;
    },
    fetchUser(state) {
      state.loading = true;
    },
    fetchUserSuccess(state, { payload }) {
      return { ...state, ...payload, loading: false, isAuthorized: true };
    },
    fetchFailure(state) {
      state.loading = false;
      state.token = "";
      state.roleName = "";
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  fetchToken,
  fetchTokenSuccess,
  fetchFailure,
  fetchUser,
  fetchUserSuccess,
} = userSlice.actions;
