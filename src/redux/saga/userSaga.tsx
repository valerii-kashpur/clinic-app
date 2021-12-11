import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchUserSuccess } from "../userSlice";
import { errorNotification } from "notifications";
import { getProfile } from "network/fetchOperations";
import { historyReplace } from "utils/history";
import { PayloadAction } from "@reduxjs/toolkit";

type Response = {
  firstName: string,
  id: string,
  lastName: string,
  photo: string,
  roleName: string,
}

function* workerUserSagaFetch({ payload }: PayloadAction<string>) {  
  try {
    const response: Response = yield call(getProfile, payload);
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
