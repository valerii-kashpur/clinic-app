import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchTokenSuccess } from "../slices/userSlice";
import { errorNotification, successNotification } from "notifications";
import { logIn } from "network/fetchOperations";
import { PayloadAction } from "@reduxjs/toolkit";

type Response = {
  access_token: string,
  refresh_token: string
}

function* workerLoginSagaFetch({ payload }:PayloadAction<{email: string, password: string}>) {
  try {
    const {access_token, refresh_token}:Response = yield call(logIn,payload)
    yield put(fetchTokenSuccess({access_token, refresh_token}));
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
