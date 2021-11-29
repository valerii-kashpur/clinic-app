import { call, takeEvery, put } from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "./userSlice";
import { notify } from "notifications";
import { logIn } from "network/fetchOperations";

function* workerUserSagaFetch({ payload }) {
  try {
    const response = yield call(logIn(payload));
    yield put(getUserSuccess(response.data.access_token));
    notify(response.status);
  } catch (error) {
    notify(error.response.status, error.response.data);
    yield put(getUserFailure());
  }
}

function* userSagaWatcher() {
  yield takeEvery("userSlice/getUserFetch", workerUserSagaFetch);
}

export default userSagaWatcher;
