import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserResponse } from "redux/saga/userSaga";

export type InitialUserState = {
  id: string,
  firstName: string,
  lastName: string,
  photo: string,
  roleName: string,
  isAuthorized: boolean,
  token: string,
  refreshToken: string,
  loading: boolean,
}

const initialState: InitialUserState = {
  id: "",
  firstName: "",
  lastName: "",
  photo: "",
  roleName: "",
  isAuthorized: false,
  token: "",
  refreshToken: "",
  loading: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    fetchToken(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchTokenSuccess(state, action: PayloadAction<{
      access_token: string,
      refresh_token: string,
    }>) {
      state.loading = false;
      state.token = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
    },
    fetchUser(state, action) {
      state.loading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<UserResponse>) {
      return { ...state, ...action.payload, loading: false, isAuthorized: true };
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
  fetchToken,
  fetchTokenSuccess,
  fetchFailure,
  fetchUser,
  fetchUserSuccess,
} = userSlice.actions;
