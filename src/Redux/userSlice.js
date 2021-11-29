const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    photo: "",
    roleName: "",
    isAuthorized: false,
    token: "",
    loading: false,
    sagaExample: ""
  },
  reducers: {
    setUser(state, { payload }) {
      return { ...state, ...payload };
    },
    setAuthorizedStatus(state, { payload }) {
      return { ...state, isAuthorized: payload };
    },
    setToken(state, { payload }) {
      return { ...state, token: payload };
    },
    getUserFetch(state, { payload }) {
      state.loading = true;
    },
    getUserSuccess(state, { payload }) {
      state.loading = false;
      state.token = payload;
    },
    getUserFailure(state, { payload }) {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setAuthorizedStatus,
  setToken,
  getUserFetch,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;
