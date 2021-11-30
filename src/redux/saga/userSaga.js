import { call, takeEvery, put } from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "../userSlice";
import { notify } from "notifications";
import { logIn } from "network/fetchOperations";

function* workerUserSagaFetch({ payload }) {
  try {
    const response = yield call(logIn(payload));
    yield put(getUserSuccess(response.access_token));
    notify(200);
  } catch (error) {
    notify(error.response.status, error.response.data);
    yield put(getUserFailure());
  }
}

function* UserSagaWatcher() {
  yield takeEvery("userSlice/getUserFetch", workerUserSagaFetch);
}

export default UserSagaWatcher;