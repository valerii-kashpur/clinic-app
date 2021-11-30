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
    sagaExample: "",
  },
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
      return {...state, ...payload, loading: false, isAuthorized:true}
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
  setAuthorizedStatus,
  setToken,
  fetchToken,
  fetchTokenSuccess,
  fetchFailure,
  fetchUser,
  fetchUserSuccess,
} = userSlice.actions;
