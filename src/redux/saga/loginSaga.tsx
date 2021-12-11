import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchTokenSuccess } from "../userSlice";
import { errorNotification, successNotification } from "notifications";
import { logIn } from "network/fetchOperations";
import { PayloadAction } from "@reduxjs/toolkit";

function* workerLoginSagaFetch({ payload }:PayloadAction<{email: string, password: string}>) {
  try {
    type Response = {
      access_token: string,
      refresh_token: string
    }
    const response:Response = yield call(logIn(payload));
    yield put(fetchTokenSuccess(response.access_token));
    successNotification("You have been successfully login!");
  } catch (error) {
    errorNotification();
    yield put(fetchFailure());
  }
}

function* loginSagaWatcher() {
  yield takeEvery("userSlice/fetchToken", workerLoginSagaFetch);
}

export default loginSagaWatcher;
