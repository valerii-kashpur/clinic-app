import { call, takeEvery, put } from "redux-saga/effects";
import { fetchFailure, fetchTokenSuccess } from "../userSlice";
import { errorNotification, successNotification } from "notifications";
import { logIn } from "network/fetchOperations";

function* workerLoginSagaFetch({ payload }) {
  try {
    const response = yield call(logIn(payload));
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
