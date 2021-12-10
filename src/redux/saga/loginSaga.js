import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchTokenSuccess } from "../userSlice";
import { notify } from "notifications";
import { logIn } from "network/fetchOperations";

function* workerLoginSagaFetch({ payload }) {
  try {
    const response = yield call(logIn(payload));
    yield put(fetchTokenSuccess(response.access_token));
    notify(200);
  } catch (error) {
    notify(error.response.status, error.response.data);
    yield put(fetchFailure());
  }
}

function* loginSagaWatcher() {
  yield takeEvery("userSlice/fetchToken", workerLoginSagaFetch);
}

export default loginSagaWatcher;
