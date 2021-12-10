const { createSlice } = require("@reduxjs/toolkit");

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
    setUser(state: InitialState, { payload }) {
      return { ...state, ...payload };
    },
    fetchToken(state: InitialState) {
      state.loading = true;
    },
    fetchTokenSuccess(state: InitialState, { payload }) {
      state.loading = false;
      state.token = payload;
    },
    fetchUser(state: InitialState) {
      state.loading = true;
    },
    fetchUserSuccess(state: InitialState, { payload }) {
      return { ...state, ...payload, loading: false, isAuthorized: true };
    },
    fetchFailure(state: InitialState) {
      state.loading = false;
      state.token = "";
      state.roleName = "";
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setAuthorizedStatus,
  setToken,
  fetchToken,
  fetchTokenSuccess,
  fetchFailure,
  fetchUser,
  fetchUserSuccess,
} = userSlice.actions;
