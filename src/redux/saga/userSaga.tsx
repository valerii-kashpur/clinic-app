import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchUserSuccess } from "../slices/userSlice";
import { errorNotification } from "notifications";
import { getProfile } from "network/fetchOperations";
import { historyReplace } from "utils/history";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserResponse = {
  firstName: string,
  id: string,
  lastName: string,
  photo: string,
  roleName: string,
}

function* workerUserSagaFetch({ payload }: PayloadAction<string>) {  
  try {
    const response: UserResponse = yield call(getProfile, payload);
    yield put(fetchUserSuccess(response));
  } catch (error) {
    errorNotification();
    yield put(fetchFailure());
    historyReplace();
  }
}

function* UserSagaWatcher() {
  yield takeEvery("userSlice/fetchUser", workerUserSagaFetch);
}

export default UserSagaWatcher;
